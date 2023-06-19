import { QuestionCircleFilled } from "@ant-design/icons";
import { Form, Input, Popover, Radio } from "antd";
import { useState } from "react";
import GiftChoose from "./components/GiftChoose";

export default () => {
  const [loginMode, setLoginMode] = useState<number>(1);

  const onChanggeLoginMode = (mode: number) => {
    setLoginMode(mode);
  };

  return (
    <Form>
      <div style={{ display: "flex" }}>
        <p>登录方式:</p>
        <Popover
          placement="right"
          content={
            <div>
              <p>手机号登录: 会顶掉已登录账号</p>
              <p>Token登录: 输入已登录的Token, 不会顶号</p>
            </div>
          }
        >
          <QuestionCircleFilled />
        </Popover>
      </div>
      <Form.Item>
        <Radio.Group
          onChange={(e) => onChanggeLoginMode(e.target.value)}
          value={loginMode}
        >
          <Radio value={1}>手机号登录</Radio>
          <Radio value={2}>Token登录</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={loginMode === 1 ? "手机号登录" : "Token登录"}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Radio.Group>
          <Radio value={1}>添加会员</Radio>
          <Radio value={2}>过期会员</Radio>
          <Radio value={3}>清除会员</Radio>
        </Radio.Group>
      </Form.Item>
      <GiftChoose giftType={1} />
    </Form>
  );
};
