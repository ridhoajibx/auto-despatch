// authActions.ts
import { AppThunk } from "@/redux/store"; // Define AppThunk if you're using middleware for async actions
import {
  loginSuccess,
  logout,
  setError,
  setLoading,
} from "@/redux/features/reducers/AuthSlice";
import { apiLogin, apiLogout } from "@/api/Api"; // Define your API functions

interface AuthData {
  token?: any;
  data?: any;
  success: () => void;
  error: () => void;
}

export const webLogin =
  (params: AuthData): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    try {
      const response = await apiLogin(params); // Make an API call to log in
      const { data, status } = response;
      dispatch(loginSuccess({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };

export const webLogout = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    await apiLogout(); // Make an API call to log out
    dispatch(logout());
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setLoading(false));
  }
};
