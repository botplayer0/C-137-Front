import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
import useAuthStore from "@/store/auth.store";
import { createBrowserHistory, History } from 'history';


interface IRequestOptions extends AxiosRequestConfig { }

interface IResponse<T = any> {
  code: number;
  data: T;
  message: string;
  total?: number
  error_msg?: string
}

interface ISuccessResponse {
  code: 0
}



class HttpClient {
  private readonly instance: AxiosInstance;
  private readonly history = createBrowserHistory();;

  constructor(baseUrl: string, options?: IRequestOptions) {
    this.instance = axios.create({
      baseURL: baseUrl,
      ...options
    })

    this.instance.defaults.withCredentials = true;

    this.instance.interceptors.request.use(this.handleRequest)
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);

  }

  private handleRequest = (config: InternalAxiosRequestConfig<AxiosRequestConfig>): InternalAxiosRequestConfig<AxiosRequestConfig> => {
    // 当登录或者注册时, header中无需 Authorization
    if (!config.url?.match(/\/(login|register|refresh)$/)) {
      const token = useAuthStore.getState().getToken.token || 'null'
      if (token) {
        config.headers.Authorization = `${token}`
      }
    }

    return config;
  }

  private handleResponse = <T>(response: AxiosResponse<IResponse<T>>): AxiosResponse<IResponse<T>> => {
    const { code, data, message: msg, error_msg: e_msg } = response.data
    if (code !== 0) {
      message.error(e_msg)
    }

    return response
  }

  private handleError = (error: any): Promise<any> => {
    console.log("here", error)
    if (error.code === "ERR_NETWORK") {
      message.error(`网络异常`)
    }
    // 处理状态码==400
    else if (error.response && error.response.status === 401) {
      this.history.push("/login")
      message.error(error.response.data.error_msg || error.message || "请求出错了")
    } else {
      message.error(error.response.data.error_msg || error.message || "请求出错了")
    }
    // 抛出axios_error
    throw error;
  }

  // 添加请求拦截器

  public async get<T>(url: string, config?: IRequestOptions): Promise<IResponse<T>> {
    const response = await this.instance.get<IResponse<T>>(url, config)
    return response.data
  }

  public async post<T>(url: string, data?: any, config?: IRequestOptions): Promise<IResponse<T>> {
    const response = await this.instance.post<IResponse<T>>(url, data, config)
    return response.data
  }

  public async put<T>(url: string, data?: any, config?: IRequestOptions): Promise<IResponse<T>> {
    const response = await this.instance.put<IResponse<T>>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: IRequestOptions): Promise<IResponse<T>> {
    const response = await this.instance.delete<IResponse<T>>(url, config);
    return response.data;
  }

}

const http = new HttpClient("http://127.0.0.1:7777")

export default http;
export type {
  IResponse
}