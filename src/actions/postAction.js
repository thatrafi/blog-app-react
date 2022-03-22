import { postActions } from "../reducers/postReducer"

 const BASE_URL = 'https://blog-app-react-fb813-default-rtdb.asia-southeast1.firebasedatabase.app'


export const getAllPosts = () =>{
    return async (dispatch) =>{
        const sendRequest = async () => {
            const response = await fetch(`${BASE_URL}/posts.json`,{
                method : 'GET'
            });
            if(!response.ok){
                throw new Error('Getting post data failed!')
            }

            const data = response.json()
            return data

        }

        try {
            const responseData = await sendRequest()
            let newArr = []
            Object.keys(responseData).map((item,key)=>{
                responseData[item]['id'] = item
               return newArr.push(responseData[item])
            })
            dispatch(postActions.setPosts({data : newArr}))

        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getPostById = (id) =>{
    return async (dispatch) => {
        const sendRequest = async()=>{
            const response = await fetch(`${BASE_URL}/posts/${id}.json`,{
                method : 'GET'
            });
            if(!response.ok){
                throw new Error(`Getting post data with ${id} failed`)
            }
            const data = response.json()
            return data
        }

        try {
            const responseData = await sendRequest()
            dispatch(postActions.setPostById({data:responseData,id:id}))
            console.log('get data by id');
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const postPostData = (postData) => {
    return async (dispatch) =>{
        const sendRequest = async () => {
            const response = await fetch(`${BASE_URL}/posts.json`,{
                method : 'POST',
                body : JSON.stringify(postData)
            });
            if(!response.ok){
                throw new Error('Posting post data failed!')
            }
        }

        try {
            await sendRequest();
            console.log("success post data");
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const putPostData = (postData,id) => {
    return async (dispatch) =>{
        const sendRequest = async () => {
            const response = await fetch(`${BASE_URL}/posts/${id}.json`,{
                method : 'PUT',
                body : JSON.stringify(postData)
            });
            if(!response.ok){
                throw new Error('Updating post data failed!')
            }
        }

        try {
            await sendRequest();
            console.log("success update data");
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const deletePostData = (id) => {
    return async (dispatch) =>{
        const sendRequest = async () => {
            const response = await fetch(`${BASE_URL}/posts/${id}.json`,{
                method : 'DELETE'
            });
            if(!response.ok){
                throw new Error('Deleting post data failed!')
            }
        }

        try {
            await sendRequest();
            console.log("success delete data");
        } catch (error) {
            console.log(error.message);
        }
    }
}