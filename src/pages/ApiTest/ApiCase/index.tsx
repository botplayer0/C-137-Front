import { useDirectoryStore } from "@/store/directory.store";
import useProjectStore from "@/store/project.store";
import { ProCard } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import CaseDetail from "./components/CaseDetail";
import CaseTree from "./components/CaseTree";
import ProjectSelector from "./components/ProjectSelector";
import "./index.css";

export default () => {
  const { treeData, setTreeData, setRootTree } = useDirectoryStore();
  const { projectList, fetchProjectList } = useProjectStore();
  const [selectProject, setSelectProject] = useState<number>(null);
  const [selectingCase, setSelectingCase] = useState<number>(null);

  // 控制当前树
  useEffect(() => {
    if (projectList.length === 0) {
      fetchProjectList();
    }
  }, []);

  // 控制详情页
  console.log("111", selectingCase);

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
            <ProjectSelector
              projectList={projectList}
              selectProject={selectProject}
              setSelectProject={setSelectProject}
            />
          </Col>
        </Row>
        <CaseTree
          projectId={selectProject}
          setSelectingCase={setSelectingCase}
        />
      </ProCard>
      <ProCard headerBordered>
        <div>tab页</div>
        <CaseDetail />
      </ProCard>
    </ProCard>
  );
};
