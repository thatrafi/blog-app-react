import { commentActions } from "../reducers/commentReducer";

const BASE_URL =
  "https://blog-app-react-fb813-default-rtdb.asia-southeast1.firebasedatabase.app";

export const getCommentsByPostId = (postId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/comments.json`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Getting comments data failed!");
      }
      const data = response.json();
      return data;
    };

    try {
      const responseData = await sendRequest();
      let newArr = [];
      if (responseData != null) {
        Object.keys(responseData).map((item, key) => {
          responseData[item]["id"] = item;
          return newArr.push(responseData[item]);
        });
      }
      const commentsById = newArr.filter((c) => c.postId === postId)
      dispatch(
        commentActions.setCommentsByPostId({
          data: (commentsById === undefined) ? newArr : commentsById,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postCommentData = (commentData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/comments.json`, {
        method: "POST",
        body: JSON.stringify(commentData),
      });
      if (!response.ok) {
        throw new Error("Posting comment data failed!");
      }
    };

    try {
      await sendRequest();
      console.log("success post comment data");
    } catch (error) {
      console.log(error.message);
    }
  };
};
