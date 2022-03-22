import { authAction } from "../reducers/authReducer";

export const getAuthentication = (userData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://blog-app-react-fb813-default-rtdb.asia-southeast1.firebasedatabase.app/admin.json",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Getting admin data failed!");
      }

      try {
        const responseData = await sendRequest();
        const adminData = responseData.find(
          (u) => u.username === userData.username
        );
        if (adminData) {
          if (adminData.password === userData.password) {
            dispatch(
              authAction.authenticate({
                message: "Success",
                isAuthenticated: true,
                token: adminData.token,
              })
            );
          } else {
            dispatch(
              authAction.authenticate({
                message: "Wrong Password!",
                isAuthenticated: false,
              })
            );
          }
        } else {
          dispatch(
            authAction.authenticate({
              message: "No User Found",
              isAuthenticated: false,
            })
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  };
};

export const validateByToken = (token) => {
  return async (dispatch) => {
    // you can dispatch reducer here
    const sendRequest = async () => {
      const response = await fetch(
        "https://blog-app-react-fb813-default-rtdb.asia-southeast1.firebasedatabase.app/admin.json",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Getting admin data failed!");
      }

      const data = response.json();
      return data;
    };

    try {
      const responseData = await sendRequest();
      const adminData = responseData.find((u) => u.token === token);
      if (adminData) {
        dispatch(
          authAction.authenticate({
            message: "Success",
            isAuthenticated: true,
            token: adminData.token,
          })
        );
        console.log("Success validate");
      } else {
        dispatch(
          authAction.authenticate({
            message: "Token is not valid",
            isAuthenticated: false,
          })
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
