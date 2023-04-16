import EditorPython from "@/components/Editor/EditorPython";
import { useApiScriptStore } from "@/store/api.script.store";
import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
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
  const { scriptInfo, setScriptInfo, updateScript, apiPostDebugPyScript } =
    useApiScriptStore();

  const debugInfo = (varKey: string, infoMessage: any) => {
    console.log("1", infoMessage);
    Modal.info({
      title: "调试结果",
      content: (
        <div>
          <p>提取变量: {varKey}</p>
          <p>返回结果: {JSON.stringify(infoMessage["var_value"])}</p>
        </div>
      ),
    });
  };

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

  const handleDebugTempScript = async () => {
    if (!scriptInfo.var_key) {
      console.log("缺少var_key");
    }
    const data = { get_var: scriptInfo.var_key, script: scriptInfo.var_script };
    const res = await apiPostDebugPyScript(data);
    if (res.code === 0) {
      debugInfo(scriptInfo.var_key, res.data);
    }
  };

  return (
    <>
      <Modal
        title="Title"
        open={props.open}
        onOk={handleOK}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        width="70%"
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
              value={scriptInfo?.name || ""}
              onChange={(e) => {
                setScriptInfo({ ...scriptInfo, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="描述">
            <TextArea
              value={scriptInfo?.description || ""}
              onChange={(e) => {
                setScriptInfo({ ...scriptInfo, description: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item
            label="变量名"
            rules={[
              { required: true, message: "请输入变量名" },
              { pattern: /^[^\s]+$/, message: "变量名不能包含空格" },
            ]}
          >
            <Input
              value={scriptInfo?.var_key || ""}
              onChange={(e) => {
                setScriptInfo({ ...scriptInfo, var_key: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="脚本">
            <div style={{ display: "flex" }}>
              <EditorPython
                var_script={scriptInfo?.var_script || ""}
                handleSetScript={updateScript}
              />
              <Button
                icon={
                  <CaretRightOutlined style={{ color: "green" }}>
                    测试
                  </CaretRightOutlined>
                }
                style={{ border: "none" }}
                onClick={handleDebugTempScript}
              />
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CScriptModal;
