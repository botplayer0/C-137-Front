import EditorPython from "@/components/Editor/EditorPython";
import { useApiScriptStore } from "@/store/api.script.store";
import { Form, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

interface DataType {
  cs_id: string;
  name: string;
  desc: string;
  var_script: string;
  var_key: string;
}

interface IModalProps {
  open: boolean;
  setOpen: (status: boolean) => void;
  editorValue?: DataType;
}

const CScriptModal: React.FC<IModalProps> = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { editScript, setEdit, clearEdit } = useApiScriptStore();

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
        width="50%"
      >
        <Form
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 21 }}
          layout="horizontal"
          style={{ width: "100%" }}
          colon={true}
        >
          <Form.Item label="脚本名">
            <Input
              value={editScript?.name || ""}
              onChange={(e) => {
                setEdit({ ...editScript, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="描述">
            <TextArea value={editScript?.desc || ""} onChange={(e) => {
                setEdit({ ...editScript, desc: e.target.value });
              }}/>
          </Form.Item>
          <Form.Item label="变量名">
            <Input value={editScript?.var_key || ""} onChange={(e) => {
                setEdit({ ...editScript, var_key: e.target.value }}/>
          </Form.Item>
          <Form.Item label="脚本">
            <EditorPython var_script={editScript?.var_script || ""} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CScriptModal;
