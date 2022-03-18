import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsData : [],
    postDataById : {},
    deletedId : ""
}

const postSlice = createSlice({
    name : 'postSlice',
    reducers : {
        addPost (state,action) {
            state.postsData.unshift(action.payload.data)
        },
        replacePost(state,action){
            const foundIndex = state.postsData.findIndex(x => x.id === action.payload.data.id);
            state.postsData[foundIndex] = action.payload.data
        },
        setPosts (state,action){
            state.postsData = action.payload.data
        },
        setPostById (state,action){
            state.postDataById.id = action.payload.id
            state.postDataById.data = action.payload.data
        },
        removePost ( state,action){
            state.postsData.splice(state.postsData.findIndex((i)=>{
                return i.id === action.payload.id
            }),1)
            state.deletedId = action.payload.id     
        }
    },
    initialState
})

export const postActions = postSlice.actions; 
export default postSlice.reducer;