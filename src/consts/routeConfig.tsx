import ApiCase from "@/pages/ApiTest/ApiCase";
import CScript from "@/pages/ApiTest/CScript";
import NewCase from "@/pages/ApiTest/NewCase";
import EnvSetting from "@/pages/Settings/EnvSetting";
import Project from "@/pages/Settings/Project";
import DataProduct from "@/pages/Tools/DataProduct";
import GiftVip from "@/pages/Tools/GiftVip";
import HttpRequest from "@/pages/Tools/HttpRequest";
import SqlDebug from "@/pages/Tools/SqlDebug";
import {
  ApiOutlined,
  BarChartOutlined,
  BarsOutlined,
  BugOutlined,
  ChromeOutlined,
  CodeOutlined,
  ConsoleSqlOutlined,
  DashboardOutlined,
  GiftOutlined,
  LineChartOutlined,
  NodeIndexOutlined,
  ProfileOutlined,
  RobotOutlined,
  RocketOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";

// import DashBoard from '@/pages/DashBoard'
// import ApiCase from '@/pages/ApiTest/ApiCase'
// import Project from '@/pages/ConfigManage/Project'

export type TypeRoutes = {
  path: string;
  name: string;
  routes?: TypeRoutes[];
  icon?: ReactNode;
  component?: ReactNode;
  chick?: boolean;
};

export type TypeOutlet = {
  key: string;
  path: string;
  element: ReactNode;
};

export const routeConfig = {
  route: {
    path: "/",
    name: "首页",
    routes: [
      {
        path: "/dashboard",
        name: "管理页",
        icon: <DashboardOutlined />,
        click: false,
        routes: [
          {
            path: "/dashboard/mine",
            name: "我的",
            icon: <UserOutlined />,
            component: <div>1</div>,
          },
          {
            path: "/dashboard/statistics",
            name: "数据统计",
            icon: <BarChartOutlined />,
            component: <div>1</div>,
          },
        ],
      },
      {
        path: "/config",
        name: "配置管理",
        icon: <BarChartOutlined />,
        click: false,
        routes: [
          {
            path: "/config/project",
            name: "项目配置",
            icon: <UserOutlined />,
            component: <Project />,
          },
          {
            path: "/config/envs",
            name: "环境配置",
            icon: <BarChartOutlined />,
            component: <EnvSetting />,
          },
        ],
      },
      {
        name: "接口测试",
        icon: <RocketOutlined />,
        path: "/apitest",
        click: false,
        routes: [
          {
            path: "/apitest/testcase",
            name: "测试用例",
            icon: <BarsOutlined />,
            component: <ApiCase />,
          },
          {
            path: "/apitest/testcase1",
            name: "测试用例1",
            icon: <BarsOutlined />,
            component: <NewCase />,
          },
          {
            path: "/apitest/plan",
            name: "自动化测试",
            icon: <RobotOutlined />,
            component: <div>1</div>,
          },
          {
            path: "/apitest/script",
            name: "公共脚本",
            icon: <CodeOutlined />,
            component: <CScript />,
          },
        ],
      },
      {
        name: "测试报告",
        icon: <LineChartOutlined />,
        path: "/report",
        click: false,
        routes: [
          {
            path: "/report/api",
            name: "接口测试报告",
            icon: <ScheduleOutlined />,
            component: <div>1</div>,
          },
          {
            path: "/report/ui",
            name: "UI测试报告",
            icon: <ScheduleOutlined />,
            component: <div>1</div>,
          },
        ],
      },
      {
        name: "实用工具",
        icon: <BugOutlined />,
        path: "/tools",
        click: false,
        routes: [
          {
            path: "/tools/http",
            name: "HTTP请求",
            icon: <ApiOutlined />,
            component: <HttpRequest />,
          },
          {
            path: "/tools/sql",
            name: "数据库查询",
            icon: <ConsoleSqlOutlined />,
            component: <SqlDebug />,
          },
          {
            path: "/tools/factory",
            name: "数据生成",
            icon: <NodeIndexOutlined />,
            component: <DataProduct />,
          },
          {
            path: "/tools/gift",
            name: "会员赠送",
            icon: <GiftOutlined />,
            component: <GiftVip />,
          },
        ],
      },
      {
        name: "文档",
        icon: <ProfileOutlined />,
        path: "/document",
        click: false,
        routes: [
          {
            path: "/document/figma",
            name: "交互稿",
            icon: <ChromeOutlined />,
            component: <div>1</div>,
          },
          {
            path: "/document/case",
            name: "测试用例",
            icon: <ChromeOutlined />,
            component: <div>1</div>,
          },
          {
            path: "/tools/chaos",
            name: "杂七杂八",
            icon: <NodeIndexOutlined />,
            component: <div>1</div>,
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/",
  },
  appList: [],
};
