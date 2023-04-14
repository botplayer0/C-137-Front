import { ICScriptList } from "@/api/config/api.script.type";
import { useApiScriptStore } from "@/store/api.script.store";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import CScriptModal from "./components/CScriptModal";

interface DataType {
  cs_id: string;
  name: string;
  desc?: string;
  tags?: string;
  var_script?: string;
  var_key?: string;
}

const CScript: React.FC = () => {
  const [open, setOpen] = useState(false);

  const {
    scriptList,
    apiGetScriptList,
    setScriptList,
    scriptInfo,
    setScriptInfo,
    clearScriptInfo,
  } = useApiScriptStore();

  const onClickEdit = (record: ICScriptList) => {
    setScriptInfo(record);
    setOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiGetScriptList();
      if (result.code === 0) {
        setScriptList(result.data);
      }
      // setData(result.data);
    };

    fetchData();
  }, []);

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
          <a onClick={() => onClickEdit(record)}>编辑</a>
          <a>调试</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={scriptList} />
      <div>
        <button
          onClick={() => {
            clearScriptInfo();
            setOpen(true);
          }}
        >
          Button
        </button>
      </div>
      <CScriptModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default CScript;
