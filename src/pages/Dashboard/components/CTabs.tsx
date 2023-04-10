import { Tabs } from "antd";
interface ITabsProps {
  items: any;
  activeKey: string;
  onChange: (path: string) => void;
  onEdit: (targetKey: string, action: string) => void;
  // children: React.ReactNode;
}

const CTabs: React.FC<ITabsProps> = (props) => {
  return (
    <Tabs
      hideAdd
      onChange={props.onChange}
      activeKey={props.activeKey}
      type="editable-card"
      onEdit={props.onEdit}
      items={props.items}
    />
  );
};

export default CTabs;
