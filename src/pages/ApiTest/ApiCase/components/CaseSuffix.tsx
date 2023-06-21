import { ProCard } from "@ant-design/pro-components";

import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  executeType: number;
  returnValue: string;
  isEnable: boolean;
}

const columns: ColumnsType<DataType> = [
  {
    title: "排序",
    dataIndex: "sort",
    key: "sort",
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "类型",
    dataIndex: "executeType",
    key: "executeType",
  },
  {
    title: "返回值",
    dataIndex: "returnValue",
    key: "returnValue",
  },
  {
    title: "启用",
    dataIndex: "isEnable",
    key: "isEnable",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "执行脚本获取当前时间戳",
    executeType: 1,
    returnValue: "now_time",
    isEnable: true,
  },
  {
    key: "2",
    name: "Jim Green",
    executeType: 2,
    returnValue: "my_sapace",
    isEnable: true,
  },
];

export default () => {
  return (
    <div
      style={{ width: "78%", borderStyle: "dotted", borderColor: "#f4f4f4" }}
    >
      <ProCard split="vertical" gutter={[16, 16]} style={{ height: "40vh" }}>
        <ProCard colSpan="70%">
          <Table columns={columns} dataSource={data} />
        </ProCard>
        <ProCard>2</ProCard>
      </ProCard>
    </div>
  );
};
