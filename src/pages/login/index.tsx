import { apiRegisterUser } from "@/api/auth/auth";
import { RequestAuthRegister } from "@/api/auth/auth.type";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./index.css";

const LoginPage: React.FC = () => {
  const handleLoginFinish = (values: any) => {
    console.log("LoginFormSummited: ", values);
  };

  const handleRegisterFinish = async (values: RequestAuthRegister) => {
    console.log("RegisterFormSumitted: ", values);
    const res = await apiRegisterUser({
      email: values.email,
      password: values.password,
    });
    console.log("res", res);
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
