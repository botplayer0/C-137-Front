import EditorPython from "@/components/Editor/EditorPython";
import { Form, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

interface IModalProps {
  open: boolean;
  setOpen: (status: boolean) => void;
}

const CScriptModal: React.FC<IModalProps> = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOK = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      props.setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    props.setOpen(false);
  };

  return (
    <>
      <Modal
        title="Title"
        open={props.open}
        onOk={handleOK}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          layout="horizontal"
          style={{ width: "100%" }}
          colon={false}
        >
          <Form.Item label="脚本名">
            <Input />
          </Form.Item>
          <Form.Item label="描述">
            <TextArea />
          </Form.Item>
          <Form.Item label="变量名">
            <Input />
          </Form.Item>
          <Form.Item label="脚本">
            <EditorPython />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CScriptModal;
