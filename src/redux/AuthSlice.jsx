import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import {auth} from "../auth/firebase"


const initialState = {
    name: "",
    email: "",
    password: "",
    isLoading: false,
    error: null,
  };
  
  export const register = createAsyncThunk(
    "register",
    async({name,email,password},{rejectWithValue})=>{
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateCurrentUser(auth, { displayName: name });
        } catch (e) {
            return rejectWithValue(e.code); 
        }
    }
  )

  const authSlice = createSlice({
    name:"auth",
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
          .addCase(register.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(register.fulfilled, (state) => {
            state.isLoading = false;
          })
          .addCase(register.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          })
        //   .addCase(logIn.pending, (state) => {
        //     state.isLoading = true;
        //   })
        //   .addCase(logIn.fulfilled, (state) => {
        //     state.isLoading = false;
        //   })
        //   .addCase(logIn.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.isLoading = false;
        //   })
        //   .addCase(forgotPassword.pending, (state) => {
        //     state.isLoading = true;
        //   })
        //   .addCase(forgotPassword.fulfilled, (state) => {
        //     state.isLoading = false;
        //   })
        //   .addCase(forgotPassword.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        //   });
      },

  })

  export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;