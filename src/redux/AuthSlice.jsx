import { async } from "@firebase/util";
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../auth/firebase"


const initialState = {
    name: "",
    email: "",
    password: "",
    isLoading: false,
    error: null,
    succesMessage:"",
  };
  
 
  export const register = createAsyncThunk(
    "register",
    async({user,email,password},{rejectWithValue})=>{
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: user,
              });
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
            const navigate = useNavigate()
            navigate("/")
          })
          .addCase(register.rejected, (state, action) => {
            state.error =action.payload ;
            state.isLoading = false;
          })
          .addCase(login.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(login.fulfilled, (state,action) => {
            state.isLoading = false;
            state.email = action.payload;
            state.succesMessage = "Login successful";
          
          })
          .addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          })
          .addCase(forgotPassword.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(forgotPassword.fulfilled, (state) => {
            state.isLoading = false;
          })
          .addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
      },

  })

  export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;