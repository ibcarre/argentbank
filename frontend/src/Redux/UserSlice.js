import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async(userCredentials)=>{
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body : JSON.stringify(userCredentials
            ),
        })
        const data = await response.json();
        localStorage.setItem("userToken", JSON.stringify(data.body.token));
        return data;
    }
);

export const userDetails = createAsyncThunk(
    "user/userDetails",
    async(arg, {getState})=>{
        const token = getState().user.user;
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method : "POST",
            headers:{
              Authorization : `Bearer ${token}`, 
            },
        })
        const data = await response.json();
       return data;
    }
)

export const changeName= createAsyncThunk(
    "user/changeName",
    async(name, {getState})=>{
        const token = getState().user.user;
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method : "PUT",
            headers:{
              Authorization : `Bearer ${token}`, 
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({ userName: name }),
        })
        const data = await response.json();
       return data;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState:{
        loading: false,
        user: null,
        userInfo: {},
        error: null
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("userToken");
            state.loading = false;
            state.userInfo = {};
            state.user = null;
            state.error = null;
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.user=null;
            state.error=null;

        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.user=action.payload.body.token;
            state.error=null;        
        })
        .addCase(loginUser.rejected,(state, action)=>{
            state.loading = false;
            state.user=null;
            state.error=action.error.message;
            console.log(state.error)    
        })
        .addCase(userDetails.fulfilled,(state, action)=>{
            state.userInfo = action.payload;
        })
        .addCase(changeName.fulfilled, (state, action) => {
            state.userInfo = action.payload;
          })
    }
});

export default userSlice.reducer;