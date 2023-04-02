
import type { IResponse } from '@/utils/http'


interface RequestAuthRegister {
  email: string,
  password: string
}

interface ResponseAuthRegister extends IResponse {
  code: number
}


interface RequestAuthLogin extends IResponse<{
  account: string,
  password: string
}> { }

interface ResponseAuthLogin extends IResponse<{
  user_id: number
  email: string
  nickname: string
  role: number
  avatar?: string
  last_login: number
  valid: number
  exp: number
  token: string
}> { }

export type {
  RequestAuthLogin,
  ResponseAuthLogin,
  RequestAuthRegister,
  ResponseAuthRegister
}