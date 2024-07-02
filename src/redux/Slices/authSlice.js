import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../Supabase/supabaseClient";

export const login = createAsyncThunk("auth/login",async({email , password})=>{
    const {data , error} = await supabase.auth.signInWithPassword({email , password})
    if(error){
        return error.message
    }
    return data
});

export const logout = createAsyncThunk("auth/logout",async()=>{
    await supabase.auth.signOut();
})

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isLoading:false,
        error:null
    }
    ,reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending , (state)=>{
            state.isLoading = true
        })
        builder.addCase(login.fulfilled , (state , action)=>{
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(login.rejected , (state , action)=>{
            state.isLoading = false
            state.error = action.error.message;
        }).addCase(logout.fulfilled, (state) => {
            state.user = null;
        });
    }
    
})

export default authSlice.reducer;