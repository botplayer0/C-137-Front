import http from "@/utils/http";
import type { RequestAuthRegister, ResponseAuthRegister } from "./auth.type";

export const apiRegisterUser = async (params: RequestAuthRegister) => {
  return await http.post<RequestAuthRegister>('/auth/register', params)
}