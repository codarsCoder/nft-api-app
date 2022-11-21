import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { addDoc, getDocs, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { auth, dbComments, UseProductListsFiltered } from "../auth/firebase"


const initialState = {
  name: "",
  email: "",
  comments:"",
  password: "",
  isLoading: false,
  error: null,
};
let asdf;

export const addComment = createAsyncThunk(
  "addComment",
  async ({ email, pName, comment }, { rejectWithValue }) => {
    try {
      addDoc(dbComments, { emal: email, pName: pName, commnt: comment, time:serverTimestamp() })
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
)

export const getComment = createAsyncThunk(
  "getComment",
  async ({ pName}, { rejectWithValue }) => {
     let carray=[]
     try {
     
      const q = query(dbComments,where('pName', '==',pName),orderBy("time","asc"))//wherede == olduğunda orderby çalışmıyor
             const querySnapshot = await getDocs(q);
        const asd = async()=> {
           querySnapshot.forEach((doc) => {
          const  {commnt, time:{seconds}, pName, emal} = doc.data()
       carray.push({commnt, seconds, pName, emal})
          })
  
    }   
    await asd()
    return carray
  }catch (e) {
      return rejectWithValue(e.code);
    }finally {
      // return carray
    }
  }
)




export const logOut = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const DatabaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload
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
      .addCase(addComment.fulfilled, (state) => {
       
        console.log("eklendi")
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        console.log(action.payload)
        console.log("hata")
      })
      .addCase(getComment.pending, (state) => {
        console.log("istek başladı");
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        console.log(state.comments)
      
      })
      .addCase(getComment.rejected, (state, action) => {
        console.log("bir hata var");
      })
    //       .addCase(forgotPassword.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(forgotPassword.fulfilled, (state) => {
    //         state.isLoading = false;
    //       })
    //       .addCase(forgotPassword.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //       });
  },

})

export const { changeName, changeEmail, changePassword } = DatabaseSlice.actions;

export default DatabaseSlice.reducer;