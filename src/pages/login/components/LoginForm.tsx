import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

type LoginFormProps = {
  onFinish: (value: any) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Form name="login-form" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "输入邮箱账号, 可不带@后缀" }]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "输入密码" }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 19 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
