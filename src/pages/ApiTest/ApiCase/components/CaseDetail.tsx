import { apiCaseDetail } from "@/api/case/api.case";
import useCaseStore from "@/store/case.store";
import { ResCaseDetail } from "@/types/apicase/api.type";
import { Col, Row, Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import CaseSuffix from "./CaseSuffix";

const onChange = (key: string) => {
  console.log(key);
};

interface IPropCaseDetail {
  caseKey: string;
}

export default (props: IPropCaseDetail) => {
  const { caseList, addCaseList } = useCaseStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentCase, setCurrenCase] = useState<ResCaseDetail | null>(null);

  const getCaseDetail = async (caseKey: string) => {
    if (
      props.caseKey !== "welcome" &&
      (caseList.length === 0 ||
        !caseList.some((item) => item.caseKey === caseKey))
    ) {
      const response = await apiCaseDetail(parseInt(caseKey.split("_")[1]));
      console.log("1", response);
      if (response.code !== 0) {
        setCurrenCase(null);
      } else {
        addCaseList(caseKey, response.data);
        setLoading(false);
      }
    }

    const filterCurrentCase = caseList.filter(
      (item) => item.caseKey === props.caseKey
    );

    if (filterCurrentCase.length > 0) {
      setCurrenCase(filterCurrentCase[0].caseInfo);
    } else {
      setCurrenCase(null);
    }
  };

  useEffect(() => {
    getCaseDetail(props.caseKey);
    console.log("ggg", caseList);
  }, [props.caseKey, caseList]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `前置步骤`,
      children: <CaseSuffix />,
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
      {loading ? (
        <div>加载中</div>
      ) : currentCase === null ? (
        <div>加载失败</div>
      ) : (
        <Row gutter={[8, 24]}>
          <Col span={6} style={{ alignSelf: "center" }}>
            用例名称: {currentCase.case_info.name}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            请求方式:{currentCase.case_info.method}
          </Col>
          <Col span={12} style={{ alignSelf: "center" }}>
            请求url:{currentCase.case_info.url}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            请求类型:{currentCase.case_info.request_type}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            用例等级:{currentCase.case_info.priority}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            用例状态:{currentCase.case_info.status}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            用例标签:{currentCase.case_info.tag}
          </Col>

          <Col span={6} style={{ alignSelf: "center" }}>
            创建人:{currentCase.case_info.create_user}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            更新人:{currentCase.case_info.update_user}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            创建时间:{currentCase.case_info.created_at}
          </Col>
          <Col span={6} style={{ alignSelf: "center" }}>
            更新时间:{currentCase.case_info.updated_at}
          </Col>
        </Row>
      )}

      <br />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};
