import { Modal } from "antd";

interface IMessageProp {
  [key: string]: any;
  open: boolean;
}

const MessageModal: React.FC<IMessageProp> = (props) => {
  return (
    <>
      <Modal title="调试结果" />
    </>
  );
};

export default MessageModal;
