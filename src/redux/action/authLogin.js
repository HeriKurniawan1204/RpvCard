import { reduxLoginUser } from "../../services/auth/login_user";
import { CookieKeys, CookiesStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken } from "../reducers/auth/authLoginSlicer";

export const loginUser = (input) => (dispatch) => {
  reduxLoginUser(input)
    .then((result) => {
      CookiesStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      window.location.href = "/dashboard";
    })
    .catch((err) => {});
};

export const logOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  dispatch(setIsLoggedIn(false));
  CookiesStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";
};
