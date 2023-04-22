import { ProCard } from "@ant-design/pro-components";

export default () => {
  return (
    <ProCard split="vertical" style={{ height: "80vh" }}>
      <ProCard colSpan="20%">
        <div>选择项目</div>
        <br />
        <br />
        <br />
        <div>用例树区域</div>
      </ProCard>
      <ProCard headerBordered>
        <div>tab页</div>
        <br />
        <br />
        <br />
        <div>用例详情</div>
      </ProCard>
    </ProCard>
  );
};
