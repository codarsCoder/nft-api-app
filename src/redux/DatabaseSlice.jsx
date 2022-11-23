import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { addDoc, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { auth, dbComments, UseProductListsFiltered } from "../auth/firebase"


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
        console.log(userCredential); 

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
    changeEmail: (state, { payload }) => {
      state.email = payload
    },
    changePassword: (state, { payload }) => {
      state.password = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
        console.log("başladı")
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload, "eklendi")
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        console.log("hata")
      })
      .addCase(getComment.pending, (state) => {
        console.log("istek başladı");
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.comments = action.payload;


      })
      .addCase(getComment.rejected, (state, action) => {
        console.log("bir hata var");
        console.log(action.payload);
      })
      .addCase(deleteComment.pending, (state, action) => {
        state.isLoading = true;
        console.log(action.payload, "   silme başladı");
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.isLoading = false;
        console.log("silme başarılı");
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        console.log("silme başarılı değil !!");
      })
      .addCase(editComment.pending, (state, action) => {
        state.isLoading = true;
        console.log(action.payload, "   güncelleme başladı");
      })
      .addCase(editComment.fulfilled, (state) => {
        state.isLoading = false;
        console.log("güncelleme başarılı");
      })
      .addCase(editComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("güncelleme başarılı değil !!");
      });
  },

})

export const { changeLoader, changeEmail, changePassword } = DatabaseSlice.actions;

export default DatabaseSlice.reducer;