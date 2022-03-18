import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated : false,
    authMessage : ""
}

const authSlice = createSlice({
    name : 'authentication',
    initialState,
    reducers : {
        authenticate(state,action){
            state.isAuthenticated = action.payload.isAuthenticated;
            state.authMessage = action.payload.message
        },
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;