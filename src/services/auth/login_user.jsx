import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";
import { CookieKeys, CookiesStorage } from "../../utils/cookies";
import http2 from "../../utils/http2";

export const reduxLoginUser = async (input) => {
  return await http2.post(API_ENDPOINT.LOGIN_USER, input);
};

const LoginUser = async (input) => {
  return await http2
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookiesStorage.set(CookieKeys.AuthToken, result.data.data.token);
      return result;
    })
    .catch((err) => {});
};

const useLogUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLogUser };
