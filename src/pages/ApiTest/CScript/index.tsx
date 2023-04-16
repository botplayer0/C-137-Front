import { ICScriptList } from "@/api/config/api.script.type";
import { useApiScriptStore } from "@/store/api.script.store";
import { message, Space, Table } from "antd";
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
  const [tableTotal, setTableTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 20;

  const {
    scriptList,
    apiGetScriptList,
    setScriptList,
    apiGetScriptDetail,
    apiDebugCScript,
    scriptInfo,
    setScriptInfo,
    clearScriptInfo,
  } = useApiScriptStore();

  const onClickEdit = async (record: ICScriptList) => {
    const fetchCSDetail = await apiGetScriptDetail(record.cs_id);
    if (fetchCSDetail.code === 0) {
      setScriptInfo(fetchCSDetail.data);
    } else {
      clearScriptInfo();
    }
    setOpen(true);
  };

  const fetchScriptList = async (
    page?: number,
    pageSize?: number,
    tag?: string
  ) => {
    const result = await apiGetScriptList(
      (page = page),
      (pageSize = pageSize),
      tag
    );
    if (result.code === 0) {
      setScriptList(result.data);
      setTableTotal(result.total ?? 0);
      setCurrentPage(page);
    }
  };

  const handleDebugCScript = async (record: DataType) => {
    const result = await apiDebugCScript(parseInt(record.cs_id));
    console.log(result);
    if (result.code === 0) {
      message.success(JSON.stringify(result.data));
    } else {
      message.error(result.error_msg);
    }
  };

  useEffect(() => {
    fetchScriptList();
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
      dataIndex: "description",
      width: "20%",
      key: "description",
    },
    {
      title: "变量名",
      dataIndex: "var_key",
      key: "var_key",
      width: "10%",
    },
    {
      title: "操作",
      key: "action",
      width: "10%",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => onClickEdit(record)}>编辑</a>
          <a onClick={() => handleDebugCScript(record)}>调试</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={scriptList}
        pagination={{
          pageSize: PAGE_SIZE,
          current: currentPage,
          total: tableTotal,
          onChange: (page, pageSzie) => {
            fetchScriptList(page, pageSzie);
          },
        }}
      />
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
