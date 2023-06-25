import SuffixDragTable from "@/components/SuffixDragTable";
import { TypeApiSuffixDetail } from "@/types/apicase/api.type";
import { ProCard } from "@ant-design/pro-components";
import { Steps } from "antd";
interface DataType {
  key: string;
  name: string;
  sort: number;
  executeType: number;
  returnValue: string;
  isEnable: boolean;
}

interface IPropSuffix {
  suffixType: number;
  prefix?: TypeApiSuffixDetail[];
  suffix?: TypeApiSuffixDetail[];
}

const formatSuffix = (suffixData: TypeApiSuffixDetail[]) => {
  const data = suffixData.map((item) => ({
    key: item.suffix_id.toString(),
    name: item.name,
    sort: item.sort,
    executeType: item.suffix_execute,
    returnValue: item.out_name,
    isEnable: item.enable,
  }));
  return data;
};

export default (props: IPropSuffix) => {
  const data: DataType[] =
    props.suffixType === 1
      ? formatSuffix(props.prefix)
      : formatSuffix(props.suffix);
  console.log("fff", data);
  return (
    <ProCard split="vertical" style={{ height: "40vh" }}>
      <ProCard colSpan="70%">
        <SuffixDragTable data={data} />
      </ProCard>
      <ProCard>
        <Steps
          direction="vertical"
          size="small"
          // current={1}
          items={[
            { title: "??", description: "11" },
            {
              title: "In Progress",
              description: "22",
            },
            {
              title: "Waiting",
              description: "33",
            },
          ]}
        />
      </ProCard>
    </ProCard>
  );
};
