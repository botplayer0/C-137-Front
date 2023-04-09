import { routeConfig } from "@/consts/routeConfig";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { CMenu } from "./components/CMenu";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function MyLayout() {
  const { route } = routeConfig;
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div>22</div>
        <br />
        <br />
        <CMenu routes={route.routes} handleMenuClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyLayout;
