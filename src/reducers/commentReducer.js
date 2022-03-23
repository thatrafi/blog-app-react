import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CommentsData : [],
    CommentsDataByPostId : [],
}

const commentSlice = createSlice({
    name : 'Comment',
    initialState,
    reducers : {
        addComment(state,action){
            state.CommentsData.unshift(action.payload.data)
        },
        setComments(state,action){
            state.CommentsData = action.payload.data
        },
        setCommentsByPostId(state,action){
            state.CommentsDataByPostId = action.payload.data
        }
    }
})

export const commentActions = commentSlice.actions
export default commentSlice.reducer