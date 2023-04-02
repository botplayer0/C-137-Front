import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

type PropRegisterForm = {
  onFinish: (values: any) => void;
};

const RegisterForm: React.FC<PropRegisterForm> = ({ onFinish }) => {
  return (
    <Form name="register-form" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "请输入邮箱" }]}
      >
        <Input prefix={<MailOutlined />} placeholder="输入邮箱注册" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 19 }}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
