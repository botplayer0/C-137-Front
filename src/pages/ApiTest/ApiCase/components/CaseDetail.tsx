import { apiCaseDetail } from "@/api/case/api.case";
import useCaseStore from "@/store/case.store";
import {
  ResCaseDetail,
  TypeApiCaseDetail,
  TypeApiSuffixDetail,
} from "@/types/apicase/api.type";
import { Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import CaseDescription from "./CaseDescription";
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
  const [tabItem, setTabItem] = useState<TabsProps["items"]>([]);

  const [curCaseDetail, setCurCaseDetail] = useState<TypeApiCaseDetail | null>(
    null
  );
  const [curCasePrefix, setCurCasePrefix] = useState<TypeApiSuffixDetail[]>([]);
  const [curCaseSuffix, setCurCaseSuffix] = useState<TypeApiSuffixDetail[]>([]);

  const getCaseDetail = async (caseKey: string) => {
    if (
      props.caseKey !== "welcome" &&
      (caseList.length === 0 ||
        !caseList.some((item) => item.caseKey === caseKey))
    ) {
      const response = await apiCaseDetail(parseInt(caseKey.split("_")[1]));
      if (response.code !== 0) {
        setCurrenCase(null);
      } else {
        addCaseList(caseKey, response.data);
        setCurrenCase(response.data);
        setCurCaseDetail(response.data.case_info);
        setCurCasePrefix(response.data.suffix_info?.prefix);
        setCurCaseSuffix(response.data.suffix_info?.suffix);
        setLoading(false);
      }
    }
  };

  //   const filterCurrentCase = caseList.filter(
  //     (item) => item.caseKey === props.caseKey
  //   );

  //   if (filterCurrentCase.length > 0) {
  //     setCurrenCase(filterCurrentCase[0].caseInfo);
  //   } else {
  //     setCurrenCase(null);
  //   }
  // };

  useEffect(() => {
    getCaseDetail(props.caseKey);
  }, [props.caseKey]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `前置步骤`,
      children: <CaseSuffix suffixType={1} prefix={curCasePrefix} />,
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
        <CaseDescription case_info={currentCase.case_info} />
      )}

      <br />
      <Tabs defaultActiveKey="1" onChange={onChange}></Tabs>
    </>
  );
};
