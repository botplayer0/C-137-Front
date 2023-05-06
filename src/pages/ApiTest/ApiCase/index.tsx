import { apiDirectoryRoot } from "@/api/project/api.project.dir";
import { useDirectoryStore } from "@/store/directory.store";
import { ProCard } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import CaseDetail from "./components/CaseDetail";
import CaseTree from "./components/CaseTree";
import ProjectSelector from "./components/ProjectSelector";
import "./index.css";
import { IProjectSelectorType } from "./types/project.selector";

export default () => {
  const { treeData, setTreeData, setRootTree } = useDirectoryStore();
  // 控制当前项目
  const [currentProject, setCurrentProject] = useState<IProjectSelectorType>({
    value: "",
    label: "",
    projectId: 0,
  });

  const fetchProjectRoot = async (projectId: number) => {
    const response = await apiDirectoryRoot(projectId);
    if (response) {
      setRootTree(response.data);
    }
  };

  // 控制当前树
  useEffect(() => {
    fetchProjectRoot(1);
  }, []);

  // 控制详情页

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
