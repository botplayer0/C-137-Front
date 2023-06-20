import { Col, Row, Tabs, TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

interface IPropCaseDetail {
  case_key: string;
}

export default (props: IPropCaseDetail) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `前置步骤`,
      children: <div>前置步骤</div>,
    },
    {
      key: "2",
      label: `接口请求`,
      children: <div>接口请求</div>,
    },
    {
      key: "3",
      label: `后置步骤`,
      children: <div>后置步骤</div>,
    },
  ];

  return (
    <>
      {/* {gutter[0] == 横向间距 gutter[1] == 纵向间距} */}
      <Row gutter={[8, 24]}>
        <Col span={6} style={{ alignSelf: "center" }}>
          用例名称:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          请求方式:
        </Col>
        <Col span={12} style={{ alignSelf: "center" }}>
          请求url:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          请求类型:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          用例等级:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          用例状态:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          用例标签:
        </Col>

        <Col span={6} style={{ alignSelf: "center" }}>
          创建人:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          更新人:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          创建时间:
        </Col>
        <Col span={6} style={{ alignSelf: "center" }}>
          更新时间:
        </Col>
      </Row>
      <br />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};
