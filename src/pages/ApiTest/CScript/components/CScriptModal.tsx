import { apiScriptDebugByTxt } from "@/api/config/api.script1";
import EditorPython from "@/components/Editor/EditorPython";
import useScriptStore from "@/store/script.store";
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

  // 编辑表格数据, 用useState控制用于后续控制是否请求更新数据
  const [fName, setFname] = useState(currentScriptInfo?.name || "");
  const [fDesc, setFdesc] = useState(currentScriptInfo?.description || "");
  const [fTag, setFtag] = useState(currentScriptInfo?.tag || "");
  const [fVarKey, setFvarKey] = useState(currentScriptInfo?.var_key || "");
  const [fVarScript, setFvarScript] = useState(
    currentScriptInfo?.var_script || ""
  );

  const showDebugModal = (varKey: string, infoMessage: any) => {
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
              value={fName}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="描述">
            <TextArea
              value={fDesc}
              onChange={(e) => {
                setFdesc(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item label="标签">
            <Input
              value={fTag}
              placeholder="添加标签"
              onChange={(e) => {
                setFtag(e.target.value);
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
              value={fVarKey}
              onChange={(e) => {
                setFvarKey(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="脚本">
            <div style={{ display: "flex" }}>
              <EditorPython
                var_script={fVarScript}
                setVarScript={setFvarScript}
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
