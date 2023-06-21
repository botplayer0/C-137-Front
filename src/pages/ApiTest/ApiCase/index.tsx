import useProjectStore from "@/store/project.store";
import { ProCard } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import { ReactNode, useEffect, useState } from "react";
import CaseDetail from "./components/CaseDetail";
import CaseTabs from "./components/CaseTabs";
import CaseTree from "./components/CaseTree";
import ProjectSelector from "./components/ProjectSelector";
import "./index.css";

interface IPropTabsItem {
  key: string;
  label: ReactNode;
  children?: ReactNode;
  closable?: boolean;
}

export default () => {
  const { projectList, fetchProjectList } = useProjectStore();
  const [selectProject, setSelectProject] = useState<number>(null);
  const [activeKey, setActiveKey] = useState<string>("welcome");
  const [tabItem, setTabItem] = useState<IPropTabsItem[]>([
    { label: "welcome", key: "welcome", children: `Welcome`, closable: false },
  ]);
  const [selectNode, setSelectedNode] = useState<string | null>(null);
  // 控制当前树
  useEffect(() => {
    if (projectList.length === 0) {
      fetchProjectList();
    }
  }, []);

  const onSelectNode = (info) => {
    console.log("222", info);
    if (info.node.type === "case") {
      const tabKey = `case_${info.node.caseId}`;
      const exists = tabItem.some((obj) => obj.key === tabKey);
      if (!exists) {
        if (tabItem.length === 1) {
          const newTabItem = tabItem[0];
          newTabItem.closable = true;
          setTabItem([newTabItem]);
        }
        setTabItem([
          ...tabItem,
          {
            label: info.node.title,
            key: tabKey,
            children: <CaseDetail caseKey={tabKey} />,
          },
        ]);
      }
      setSelectedNode(tabKey);
      setActiveKey(tabKey);
    }
  };

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
        <CaseTree projectId={selectProject} onSelectNode={onSelectNode} />
      </ProCard>
      <ProCard headerBordered>
        <CaseTabs
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          tabItem={tabItem}
          setTabItem={setTabItem}
        />
      </ProCard>
    </ProCard>
  );
};
