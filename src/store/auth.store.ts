import { apiLoginUser, apiRefreshLogin } from "@/api/auth/auth";
import { IResponse } from "@/utils/http";
import { message } from "antd";
import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware"



interface UserInfo {
  user_id: number
  email: string
  nickname: string
  role: number
  last_login: number
  valid: number
  avatar?: string
}

interface TokenInfo {
  token: string
  exp: number
}

interface AuthStore {
  getUser: UserInfo | null
  getToken: TokenInfo | null
  refresh: () => Promise<IResponse>
  login: (account: string, password: string) => Promise<boolean>
  // logout: () => void
}


const useAuthStore = create<AuthStore>()(
  persist((set, get) => ({
    getUser: null,
    getToken: null,
    // 刷新Token
    refresh: async () => {
      const oldToken = get().getToken.token
      const exp = get().getToken.exp
      if (oldToken && exp) {
        try {
          const response = await apiRefreshLogin(oldToken)
          const { token, exp, ...otherUserInfo } = response.data
          const tokenObj = { token: token, exp: exp }
          set({ getToken: tokenObj, getUser: otherUserInfo })
          return response
        } catch (error) {
          throw error
        }
      }
    },
    login: async (account, password) => {
      try {
        const response = await apiLoginUser({ account: account, password: password })
        if (response.code === 0) {
          const { token, exp, ...otherUserInfo } = response.data
          const tokenObj = { token: token, exp: exp }
          set({ getToken: tokenObj, getUser: otherUserInfo })
          return true
        }
      } catch (error) {
        message.error(error)
        return false
      }
    }
  }), {
    name: "auth-store",
    storage: createJSONStorage(() => localStorage),
    getInitialState: () => ({
      getToken: JSON.parse(localStorage.getItem("token")) || null,
      getUser: JSON.parse(localStorage.getItem("user")) || null
    })
  } as PersistOptions<AuthStore, unknown>)
);

export default useAuthStore