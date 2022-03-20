import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWhiteBackground : false
}

const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers : {
        setWhiteBackground(state){
            state.isWhiteBackground = true
        },
        setBlueBackground(state){
            state.isWhiteBackground = false
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;