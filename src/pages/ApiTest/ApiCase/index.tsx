import { ProCard } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import CaseDetail from "./components/CaseDetail";
import CaseTree from "./components/CaseTree";
import ProjectSelector from "./components/ProjectSelector";
import "./index.css";

export default () => {
  return (
    <ProCard split="vertical" style={{ height: "80vh" }}>
      <ProCard colSpan="17%" id="tree-left-card">
        <Row>
          <Col span={4} style={{ alignSelf: "center" }}>
            <div>项目: </div>
          </Col>
          <Col span={20}>
            <ProjectSelector />
          </Col>
        </Row>

        <br />
        <CaseTree />
      </ProCard>
      <ProCard headerBordered>
        <div>tab页</div>
        <br />
        <CaseDetail />
      </ProCard>
    </ProCard>
  );
};
