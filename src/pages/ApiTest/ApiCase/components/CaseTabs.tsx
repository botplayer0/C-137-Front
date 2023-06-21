import useCaseStore from "@/store/case.store";
import { Tabs } from "antd";
import { ReactNode } from "react";
interface IPropTabsItem {
  key: string;
  label: ReactNode;
  children?: ReactNode;
  closable?: boolean;
}

interface IPropTabs {
  activeKey: string;
  setActiveKey: (tabKey: string) => void;
  tabItem: IPropTabsItem[];
  setTabItem: (item: IPropTabsItem[]) => void;
}

export default (props: IPropTabs) => {
  const { removeCase } = useCaseStore();
  const remove = (targetKey: string) => {
    const targetIndex = props.tabItem.findIndex(
      (pane) => pane.key === targetKey
    );
    const newPanes = props.tabItem.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === props.activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      props.setActiveKey(key);
    }
    if (newPanes.length === 1) {
      newPanes[0].closable = false;
    }
    props.setTabItem(newPanes);
    removeCase(targetKey);
  };

  return (
    <Tabs
      hideAdd
      type="editable-card"
      activeKey={props.activeKey}
      items={props.tabItem}
      onChange={(e) => props.setActiveKey(e)}
      onEdit={(targetKey: string, action: "add" | "remove") =>
        action === "remove" && remove(targetKey)
      }
    />
  );
};
