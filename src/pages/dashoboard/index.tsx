import BaseRoute from "@/consts/BaseRoute";
import { generateBreadcrumbs } from "@/utils/routerMapper";
import { PageContainer, ProLayout } from "@ant-design/pro-components";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();
  // const breadcrumbRoute = BreadcrumMapper(MineRoute.route)
  // console.log(breadcrumbRoute)
  const [pathname, setPathname] = useState(location.pathname);
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        siderWidth={216}
        bgLayoutImgList={[
          {
            src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            left: 85,
            bottom: 100,
            height: "303px",
          },
          {
            src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            bottom: -68,
            right: -45,
            height: "303px",
          },
          {
            src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
            bottom: 0,
            left: 0,
            width: "331px",
          },
        ]}
        {...BaseRoute}
        breadcrumbRender={generateBreadcrumbs(BaseRoute.route)}
        location={{
          pathname,
        }}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          title: "啊啊啊啊啊",
          size: "small",
        }}
        // actionsRender={(props) => {
        //   if (props.isMobile) return []
        //   return [
        //     <InfoCircleFilled key="InfoCircleFilled" />,
        //     <QuestionCircleFilled key="QuestionCircleFilled" />,
        //     <GithubFilled key="GithubFilled" />,
        //   ]
        // }}
        menuItemRender={(item, dom) => (
          <Link to={item.path} onClick={() => setPathname(item.path)}>
            {dom}
          </Link>
        )}
      >
        <PageContainer title={false}>
          <Outlet />
          {/* <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}></ProCard> */}
        </PageContainer>
      </ProLayout>
    </div>
  );
};
