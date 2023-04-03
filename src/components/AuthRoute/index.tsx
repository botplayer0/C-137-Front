/** 
对主路由进行Token校验与刷新
**/
import useAuthStore from "@/store/auth.store";
import { message } from "antd";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { getUser, getToken, refresh } = useAuthStore();

  // 1. 当存在用户信息和token信息时, 在有效期内, 则保留当前页面
  // 2. 当存在用户信息和token信息时, 不在有效期内, 刷新成功, 则保留当前页面
  // 3. 当存在用户信息和token信息时, 不在有效期内, 刷新失败, 则路由到Login页面
  // 4. 当不存在(丢失)用户信息和token信息时, 则路由到Login页面
  if (
    getUser &&
    getToken &&
    getToken.token &&
    getToken.exp > Date.now() / 1000 - 10 * 60
  ) {
    return <>{children}</>;
  } else if (
    getUser &&
    getToken &&
    getToken.token &&
    getToken.exp < Date.now() / 1000 - 10 * 60
  ) {
    refresh()
      .then((success) => {
        message.success("刷新Token成功");
        return success;
      })
      .catch((error) => {
        return <Navigate to="/login" replace />;
      });
  } else {
    return <Navigate to="/login" replace />;
  }
  return <Navigate to="/login" replace />;
};

export default AuthRoute;
