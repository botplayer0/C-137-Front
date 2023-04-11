import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import CScriptModal from "./components/CScriptModal";

interface DataType {
  cs_id: string;
  name: string;
  desc: string;
  var_script: string;
  var_key: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "脚本名",
    dataIndex: "name",
    key: "name",
    width: "10%",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "描述",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "变量名",
    dataIndex: "var_key",
    key: "var_key",
    width: "10%",
  },
  {
    title: "脚本详情",
    dataIndex: "var_script",
    key: "var_script",
    ellipsis: true,
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>调试</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    cs_id: "1",
    name: "自动会议时间",
    desc: "获取当前时间未来5分钟-15分钟时间",
    var_key: "meet_time",
    var_script:
      "from datetime import datetime, timedelta\ndef future_time():\n    time_interval = [i * 5 for i in range(0, 13)]\n    now_time = datetime.now().replace(second=0, microsecond=0)\n    for i in time_interval:\n        if now_time.minute <= i:\n            now_time = now_time + timedelta(minutes=i - now_time.minute) + timedelta(minutes=15)\n            next_time = now_time + timedelta(minutes=30)\n            return int(now_time.timestamp()), int(next_time.timestamp())\nmeet_time=future_time()\n",
  },
];

const CScript: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <div>
        <button onClick={() => setOpen(true)}>Button</button>
      </div>
      <CScriptModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default CScript;
