import { ProCard } from "@ant-design/pro-components";
import { Tabs, Tree } from "antd";
import { ReactNode, useState } from "react";

const { TreeNode } = Tree;
const { TabPane } = Tabs;

interface IPropTabsItem {
  key: string;
  label: ReactNode;
  children?: ReactNode;
  closable?: boolean;
}

const treeData = [
  {
    key: "1",
    title: "Node 1",
    children: [
      { key: "1-1", title: "Leaf 1-1" },
      { key: "1-2", title: "Leaf 1-2" },
    ],
  },
  { key: "2", title: "Leaf 2" },
  { key: "3", title: "Leaf 3" },
];

export default () => {
  const [selectNode, setSelectedNode] = useState<string | null>(null);
  const [activeKey, setActiveKey] = useState<string>("welcome");
  const [tabItem, setTabItem] = useState<IPropTabsItem[]>([
    { label: "welcome", key: "welcome", children: `Welcome`, closable: false },
  ]);

  const onSelectNode = (selectKeys) => {
    setSelectedNode(selectKeys[0]);
    const exists = tabItem.some((obj) => obj.key === selectKeys[0]);

    if (!exists) {
      if (tabItem.length === 1) {
        const newTabItem = tabItem[0];
        newTabItem.closable = true;
        setTabItem([newTabItem]);
      }
      setTabItem([
        ...tabItem,
        { label: selectKeys[0], key: selectKeys[0], children: selectKeys[0] },
      ]);
    }
    setActiveKey(selectKeys[0]);
  };

  return (
    <ProCard split="vertical" style={{ width: "70%", height: "70%" }}>
      <ProCard colSpan={"17%"}>11</ProCard>
      <ProCard>22</ProCard>
    </ProCard>
  );
};
