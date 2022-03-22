import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated : false,
    authMessage : "",
    token : ""
}

const authSlice = createSlice({
    name : 'authentication',
    initialState,
    reducers : {
        authenticate(state,action){
            state.isAuthenticated = action.payload.isAuthenticated;
            state.authMessage = action.payload.message;
            state.token = action.payload.token;
        },
        logout(state){
            state.isAuthenticated = false
            state.authMessage = ""
            state.token = ""
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;