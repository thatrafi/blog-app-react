import { authAction } from '../reducers/authReducer';

export const getAuthentication = (userData) => {
	return async (dispatch) => {
		// you can dispatch reducer here
		const sendRequest = async () => {
			const response = await fetch(
				'https://blog-app-react-fb813-default-rtdb.asia-southeast1.firebasedatabase.app/admin.json',
				{
					method: 'GET',
				}
			);

			if (!response.ok) {
				throw new Error('Getting admin data failed!');
			}

			const data = response.json();
			return data;
		};

		try {
			const responseData = await sendRequest();
			const adminData = responseData.find((u) => u.username === userData.username);

			if (adminData) {
				if (adminData.password === userData.password) {
					dispatch(authAction.authenticate({ message: 'success', isAuthenticated: true }));
				} else {
					dispatch(authAction.authenticate({ message: 'Wrong Password!', isAuthenticated: false }));
				}
			} else {
				dispatch(authAction.authenticate({ message: 'No User Found', isAuthenticated: false }));
			}
		} catch (error) {
			console.log(error.message);
		}
	};
};
