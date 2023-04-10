import { TypeRoutes } from "@/consts/routeConfig";
import { newMenuRender } from "@/utils/routerMapper";
import { Menu } from "antd";

interface IPropMenu {
  routes: TypeRoutes[];
  handleMenuClick: (path: string) => void;
  addTabs: (key: string, label: string) => void;
  selectedKeys: string[];
  openKeys: string[];
  onOpenChange: (keys: string[]) => void;
}

export const CMenu: React.FC<IPropMenu> = (props) => {
  const menuItems = newMenuRender(props.routes);

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={props.openKeys}
      onOpenChange={props.onOpenChange}
      selectedKeys={props.selectedKeys}
      items={menuItems}
      onClick={(e) => {
        props.handleMenuClick(e.key);
        console.log(e);
      }}
      onSelect={(info) => {
        props.addTabs(info.key, info.domEvent.currentTarget.innerText);
      }}
    />
  );
};
