import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../reducers/authReducer";
import postReducer from "../reducers/postReducer";
import uiReducer from "../reducers/uiReducer";

const store = configureStore({
    reducer : {
        auth : authReducer,
        posts : postReducer,
        ui : uiReducer
    }
});

export default store