import http, { IResponse } from "@/utils/http";
import type { RequestAuthLogin, RequestAuthRegister, ResponseAuthRegister, ResponseAuthLogin } from "./auth.type";

export const apiRegisterUser = async (params: RequestAuthRegister) => {
  const response: IResponse = await http.post('/auth/register', params)
  return response
}

export const apiLoginUser = async (params: RequestAuthLogin) => {
  const response: ResponseAuthLogin = await http.post('/auth/login', params);
  return response
}

export const apiRefreshLogin = async (token: string) => {
  // 刷新接口重写请求头
  const response: ResponseAuthLogin = await http.post('/auth/refresh', null, {
    headers: {
      Authorization: token
    }
  })
  return response
}