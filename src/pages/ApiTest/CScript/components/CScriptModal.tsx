import { apiScriptDebugByTxt } from "@/api/config/api.script";
import EditorPython from "@/components/Editor/EditorPython";
import useScriptStore from "@/store/script.store";
import { showDebugModal } from "@/utils/showDebugModal";
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
  isEdit: boolean;
  setIsEdit: (edit: boolean) => void;
  editorValue?: DataType;
}

const CScriptModal: React.FC<IModalProps> = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { currentScriptInfo, setCurrentScriptInfo, updateCurrentScriptInfo } =
    useScriptStore();

  const handleOK = () => {
    if (props.isEdit) {
      console.log("编辑");
    } else {
      console.log("新增");
    }
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
    if (!currentScriptInfo.var_key) {
      console.log("缺少var_key");
    }
    const data = {
      get_var: currentScriptInfo.var_key,
      script: currentScriptInfo.var_script,
    };
    const res = await apiScriptDebugByTxt(data);
    if (res.code === 0) {
      showDebugModal(currentScriptInfo.var_key, res.data);
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
              value={currentScriptInfo?.name}
              onChange={(e) => {
                updateCurrentScriptInfo("name", e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="描述">
            <TextArea
              value={currentScriptInfo?.description}
              onChange={(e) => {
                updateCurrentScriptInfo("description", e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item label="标签">
            <Input
              value={currentScriptInfo?.tag}
              placeholder="添加标签"
              onChange={(e) => {
                updateCurrentScriptInfo("tag", e.target.value);
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
              value={currentScriptInfo?.var_key}
              onChange={(e) => {
                updateCurrentScriptInfo("var_key", e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="脚本">
            <div style={{ display: "flex" }}>
              <EditorPython
                var_script={currentScriptInfo?.var_script || ""}
                updateCurrentScriptInfo={updateCurrentScriptInfo}
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
