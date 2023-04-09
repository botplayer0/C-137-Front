import { TypeRoutes } from "@/consts/routeConfig";
import { newMenuRender } from "@/utils/routerMapper";
import { Menu } from "antd";

interface IPropMenu {
  routes: TypeRoutes[];
  handleMenuClick: (path: string) => void;
}

export const CMenu: React.FC<IPropMenu> = (props) => {
  const menuItems = newMenuRender(props.routes);
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={["/dashboard"]}
      defaultSelectedKeys={["/dashboard/mine"]}
      items={menuItems}
      onClick={(e) => {
        props.handleMenuClick(e.key);
      }}
    />
  );
};
