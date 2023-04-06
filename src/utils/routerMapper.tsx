import type { ReactNode } from "react";

interface routeProp {
  path: string;
  name?: string;
  icon?: ReactNode;
  component?: ReactNode;
  // click?: boolean;
  routes?: Array<routeProp>;
}

export const routerMapper = (route: routeProp) => {
  const routes = [];
  if (route.component) {
    routes.push({
      path: route.path,
      name: route.name,
      component: route.component,
    });
  }
  if (route.routes && route.routes.length > 0) {
    route.routes.forEach((item) => {
      let childRoute = routerMapper(item);
      if (childRoute && childRoute.length > 0) {
        childRoute.forEach((cItem) => routes.push(cItem));
      }
    });
  }
  return routes;
};

export const generateBreadcrumbs = (route: routeProp) => {
  if (!route) {
    return null;
  }

  const { path, name, component, routes } = route;

  if (!component) {
    return null;
  }

  const breadcrumb = {
    path,
    breadcrumbName: name,
  };

  if (!routes || routes.length === 0) {
    return breadcrumb;
  }

  const childBreadcrumbs = routes
    .map((childRoute) => generateBreadcrumbs(childRoute))
    .filter((childBreadcrumb) => childBreadcrumb);

  if (childBreadcrumbs.length === 0) {
    return breadcrumb;
  }

  return {
    path,
    breadcrumbName: name,
    children: childBreadcrumbs,
  };
};
