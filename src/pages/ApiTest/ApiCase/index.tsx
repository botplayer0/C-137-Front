import { ProCard } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import CaseDetail from "./components/CaseDetail";
import CaseTree from "./components/CaseTree";
import ProjectSelector from "./components/ProjectSelector";
import "./index.css";

export default () => {
  return (
    <ProCard split="vertical" style={{ height: "80vh" }}>
      <ProCard
        colSpan={
          window.screen.width <= 1440 && window.screen.height <= 900
            ? "20%"
            : "17%"
        }
        id="tree-left-card"
      >
        <Row style={{ paddingBottom: 7 }}>
          <Col span={24}>
            <ProjectSelector />
          </Col>
        </Row>
        <CaseTree />
      </ProCard>
      <ProCard headerBordered>
        <div>tab页</div>
        <CaseDetail />
      </ProCard>
    </ProCard>
  );
};
