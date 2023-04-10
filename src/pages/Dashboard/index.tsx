import { routeConfig } from "@/consts/routeConfig";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CMenu } from "./components/CMenu";
import CTabs from "./components/CTabs";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function MyLayout() {
  const { route } = routeConfig;
  const navigate = useNavigate();
  // 控制Menu的选择 + tab的选中
  const [selectedKeys, setSelectedKeys] = useState([]);
  // 控制MenuGrop的展开
  const [openKeys, setOpenKeys] = useState([]);
  // tab的展开与关闭
  const [tabsItem, setTabsItem] = useState([]);

  useEffect(() => {
    // 初始化进来后展开管理页-我的和打开tab
    setOpenKeys(["/dashboard"]);
    setSelectedKeys(["/dashboard/mine"]);
    addTabs("/dashboard/mine", "我的");
  }, []);

  const handleMenuClick = (path: string) => {
    // Temp: 展开MenuGroup
    let pathSplit = path.split("/");
    if (pathSplit.length && openKeys.indexOf(`/${pathSplit[1]}`) === -1) {
      setOpenKeys([...openKeys, `/${pathSplit[1]}`]);
    }
    // 控制Menu选择与Tabs的选中,双向
    setSelectedKeys([path]);

    // 点击菜单时, 路由
    navigate(path);
  };

  const handleMenuGroupClick = (keys: string[]) => {
    // 展开与收合
    setOpenKeys(keys);
  };

  // 添加tab页
  const addTabs = (key: string, label: string) => {
    if (tabsItem.filter((item) => item.key === key).length > 0) {
      return;
    }
    setTabsItem([
      {
        key: key,
        label: label,
        children: <Outlet />,
      },
      ...tabsItem,
    ]);
  };
  // 删除Tab页
  const delTabs = (targetKey: string, action: string) => {
    // 查询删除的target的当前index
    const targetIndex = tabsItem.findIndex((pane) => pane.key === targetKey);
    // filter过滤
    const newTabsItem = tabsItem.filter((pane) => pane.key !== targetKey);
    // 特殊处理, 删除的为当前选中的
    if (newTabsItem.length && targetKey === selectedKeys[0]) {
      // 删除的Index === 处理后的长度, 则取-1
      // 删除的Index !== 处理后的长度, 则取当前
      const { key } =
        newTabsItem[
          targetIndex === newTabsItem.length ? targetIndex - 1 : targetIndex
        ];
      handleMenuClick(key);
    }
    setTabsItem(newTabsItem);
  };
  console.log("Open", openKeys);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div>22</div>
        <br />
        <br />
        <CMenu
          routes={route.routes}
          handleMenuClick={handleMenuClick}
          addTabs={addTabs}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={handleMenuGroupClick}
        />
      </Sider>
      <Layout>
        <Content>
          <CTabs
            items={tabsItem}
            activeKey={selectedKeys[0]}
            onChange={handleMenuClick}
            onEdit={delTabs}
          />
          {/* <Outlet /> */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyLayout;
