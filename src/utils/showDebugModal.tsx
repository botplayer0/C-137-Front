import { Modal } from "antd";

const showDebugModal = (varKey: string, infoMessage: any) => {
  // 序列化
  let serializedValue = infoMessage[varKey];
  try {
    serializedValue = JSON.stringify(serializedValue);
  } catch (err) {
    serializedValue = infoMessage[varKey];
  }
  Modal.info({
    title: "调试结果",
    content: (
      <div>
        <p>提取变量: {varKey} </p>
        <p> 返回结果: {serializedValue} </p>
      </div>
    ),
  });
};

export { showDebugModal };
