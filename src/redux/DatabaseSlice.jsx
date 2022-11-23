import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { addDoc, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { auth, dbComments } from "../auth/firebase"


const initialState = {
  name: "",
  email: "",
  comments: [],
  password: "",
  isLoading: false,
  error: null,
};

export const addComment = createAsyncThunk(
  "addComment",
  async ({ email, pName, comment }, { rejectWithValue }) => {
    try {
      await addDoc(dbComments, { emal: email, pName: pName, commnt: comment, time: serverTimestamp() })
      return pName
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
)

export const getComment = createAsyncThunk(
  "getComment",
  async ({ pName }, { rejectWithValue }) => {
    let carray = []
    try {

      const q = query(dbComments, where('pName', '==', pName), orderBy("time", "asc"))//wherede == olduğunda orderby çalışmıyor
      const querySnapshot = await getDocs(q);
      const fillArray = async () => {
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const { commnt, time: { seconds }, pName, emal } = doc.data()
          carray.push({ id, commnt, seconds, pName, emal })
        })

      }
      await fillArray()
      return carray
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
)




export const editComment = createAsyncThunk(
  "editComment",
  async ({commentId,comment }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(dbComments, commentId), { commnt: comment }).then((userCredential) => {
        // Signed in
       
      })
return comment
    } catch (e) {
      return rejectWithValue(e.code);
    }

  }
);

export const deleteComment = createAsyncThunk(
  "deleteComment",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(dbComments, id));
      return id
    } catch (e) {
      return rejectWithValue(e.code);
    }

  }
);

// export const deleteComment = createAsyncThunk(
//   "deleteComment",
//   async ({ id}, { rejectWithValue }) => {
//      try {
//      await deleteDoc(doc(dbComments,id))
//     }   
//   catch (e) {
//       return rejectWithValue(e.code);
//     } 
//   })




export const logOut = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const DatabaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    changeLoader: (state, { payload }) => {
      state.isLoading = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getComment.pending, (state) => {
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.comments = action.payload;


      })
      .addCase(getComment.rejected, (state, action) => {

      })
      .addCase(deleteComment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editComment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editComment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

      });
  },

})

export const { changeLoader, changeEmail, changePassword } = DatabaseSlice.actions;

export default DatabaseSlice.reducer;