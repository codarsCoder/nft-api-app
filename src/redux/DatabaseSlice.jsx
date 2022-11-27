import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { addDoc, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { auth, dbComments, dbLike } from "../auth/firebase"


const initialState = {
  name: "",
  email: "",
  comments: [],
  allLikes:[],
  likes:[],
  like:[],
  password: "",
  isLoading: false,
  error: null,
};


// Comments 
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



export const logOut = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

// Likes 
export const addLike = createAsyncThunk(
  "addLike",
  async ({ email, pName}, { rejectWithValue }) => {
    console.log(email,pName);
    let id;
    let carray= []
    try {
      const q = query(dbLike, where('pName', '==', pName) , where('emal', '==', email))//wherede == olduğunda orderby çalışmıyor
      const querySnapshot = await getDocs(q);
      const fillArray = async () => {
        querySnapshot.forEach((doc) => {
           id = doc.id;
          const { pName, emal } = doc.data()
          carray.push({ id,  pName, emal })
        })
      }
      await fillArray()
        if(id) {
          await deleteDoc(doc(dbLike, id));
          return id
        }else {
            await addDoc(dbLike, { emal: email, pName: pName, time: serverTimestamp() })
      return pName 
        }

    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
)


export const getLikes = createAsyncThunk(
  "getLikes",
  async ({ pName }, { rejectWithValue }) => {
    let carray = []
    try {

      const q = query(dbLike, where('pName', '==', pName))//wherede == olduğunda orderby çalışmıyor
      const querySnapshot = await getDocs(q);
      const fillArray = async () => {
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const { pName, emal } = doc.data()
          carray.push({ id,  pName, emal })
        })

      }
      await fillArray()
      return carray
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
)

export const getLike = createAsyncThunk(
  "getLike",
  async ({ pName, email }, { rejectWithValue }) => {
    let carray = []
    try {
      const q = query(dbLike, where('pName', '==', pName) , where('emal', '==', email))//wherede == olduğunda orderby çalışmıyor
      const querySnapshot = await getDocs(q);
      const fillArray = async () => {
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const { pName, emal } = doc.data()
          carray.push({ id,  pName, emal })
        })
      }
      await fillArray()
      return carray
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
)
// export const getAllLike = createAsyncThunk(
//   "getAllLike",
//   async (_, { rejectWithValue }) => {
//     let carray = []
//     try {
//       const q = query(dbLike)//wherede == olduğunda orderby çalışmıyor
//       const querySnapshot = await getDocs(q);
//       const fillArray = async () => {
//         querySnapshot.forEach((doc) => {
//           const id = doc.id;
//           const { pName, emal } = doc.data()
//           carray.push({ id,  pName, emal })
//         })
//       }
//       await fillArray()
//       return carray
//     } catch (e) {
//       return rejectWithValue(e.code);
//     }
//   }
// )

export const deleteLike = createAsyncThunk(
  "deleteLike",
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(dbLike, id));
      return id
    } catch (e) {
      return rejectWithValue(e.code);
    }

  }
);

 
const DatabaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    changeLoader: (state, { payload }) => {
      state.isLoading = payload
    },
 
    changeError: (state, { payload }) => {
      state.error = payload
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

      })
        .addCase(getLikes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getLikes.fulfilled, (state,action) => {
        state.likes = action.payload;
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(getLikes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

      })
      .addCase(getLike.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getLike.fulfilled, (state,action) => {
        state.like = action.payload;
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(getLike.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

      })
      .addCase(addLike.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addLike.fulfilled, (state,action) => {
        // state.like = action.payload;
        // console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(addLike.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

      })
      .addCase(deleteLike.pending, (state, action) => {
        state.isLoading = true;
        console.log("sil balşkasdas");
      })
      .addCase(deleteLike.fulfilled, (state,action) => {
        state.like = action.payload;
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteLike.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload);
      });
      // .addCase(getAllLike.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      // .addCase(getAllLike.fulfilled, (state,action) => {
      //   state.allLikes = action.payload;
      //   state.isLoading = false;
      // })
      // .addCase(getAllLike.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      //   console.log(action.payload);
      // });
  },

})

export const { changeLoader, changeEmail, changePassword } = DatabaseSlice.actions;

export default DatabaseSlice.reducer;