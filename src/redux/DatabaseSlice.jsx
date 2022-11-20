import { async } from "@firebase/util";
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {auth, dbComments} from "../auth/firebase"


const initialState = {
    name: "",
    email: "",
    password: "",
    isLoading: false,
    error: null,
  };
  
 
  export const addComment = createAsyncThunk(
    "addComment",
    async({email,comment},{rejectWithValue})=>{
        try {
            addDoc(dbComments,{emal:email, commnt:comment,time:serverTimestamp()})
        } catch (e) {
            return rejectWithValue(e.code); 
        }
    }
  )

  export const login = createAsyncThunk(
    "login",
    async({email,password},{rejectWithValue})=>{
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return email
        } catch (e) {
            return rejectWithValue(e.code);
        }
    }
  )

  export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (email, { rejectWithValue }) => {
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (e) {
        return rejectWithValue(e.code);
      }
    }
  );

  export const logOut = createAsyncThunk("auth/logout", async () => {
    await signOut(auth);
  });

  const DatabaseSlice = createSlice({
    name:"database",
    initialState,
    reducers:{
        changeName: (state,{payload})=>{
            state.name = payload
        },
        changeEmail: (state,{payload})=>{
            state.email = payload
        },
        changePassword: (state, {payload}) =>{
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
            state.isLoading = false;
            console.log("eklendi")
          })
          .addCase(addComment.rejected, (state, action) => {
            state.error =action.payload ;
            state.isLoading = false;
            console.log(action.payload)
            console.log("hata")
          })
    //       .addCase(login.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(login.fulfilled, (state,action) => {
    //         state.isLoading = false;
    //         state.email = action.payload
    //         console.log(state.email)
    //       })
    //       .addCase(login.rejected, (state, action) => {
    //         state.error = action.payload;
    //         state.isLoading = false;
    //       })
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