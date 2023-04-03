import { apiRegisterUser } from "@/api/auth/auth";
import { RequestAuthRegister } from "@/api/auth/auth.type";
import useAuthStore from "@/store/auth.store";
import type { TabsProps } from "antd";
import { message, Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./index.css";

const LoginPage: React.FC = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLoginFinish = async (values: any) => {
    const isLoginSuccess = await login(values.account, values.password);
    if (isLoginSuccess) {
      message.success("登录成功~");
      navigate("/");
    } else {
      message.error("登录失败");
    }
  };

  const handleRegisterFinish = async (values: RequestAuthRegister) => {
    const res = await apiRegisterUser({
      email: values.email,
      password: values.password,
    });
    if (res.code === 0) {
      message.success("注册成功~");
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "login",
      label: `登录`,
      children: <LoginForm onFinish={handleLoginFinish} />,
    },
    {
      key: "register",
      label: `注册`,
      children: <RegisterForm onFinish={handleRegisterFinish} />,
    },
  ];

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div>logo</div>
        <div>
          <Tabs defaultActiveKey="login" items={items} centered />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
