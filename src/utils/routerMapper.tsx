import type { TypeOutlet, TypeRoutes } from "@/consts/routeConfig";
import { Menu } from "antd";

const { SubMenu } = Menu;
interface MenuItem {
  key: string;
  // title: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  link?: React.ReactNode;
  children?: MenuItem[];
}

export const menuRender = (routes: TypeRoutes[]) => {
  return routes.map((route) => {
    if (route.routes) {
      return (
        <SubMenu key={route.path} icon={route.icon} title={route.name}>
          {menuRender(route.routes)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={route.path} icon={route.icon}>
          {route.name}
        </Menu.Item>
      );
    }
  });
};

export const newMenuRender = (routes: TypeRoutes[]) => {
  return routes.map((route) => {
    const menuItem: MenuItem = {
      key: route.path,
      label: route.name,
      icon: route.icon,
    };
    if (route.routes && route.routes.length > 0) {
      menuItem.children = newMenuRender(route.routes);
    }

    if (route.component) {
      menuItem.link = route.path;
    }
    return menuItem;
  });
};

export const outletRender = (routes: TypeRoutes[]) => {
  const result: TypeOutlet[] = [];
  routes.forEach((route) => {
    const { path, component, routes: subRoute } = route;

    if (component) {
      result.push({ path: path, key: path, element: component });
    }

    if (subRoute) {
      const subOutletRender = outletRender(subRoute);
      result.push(...subOutletRender);
    }
  });
  return result;
};
