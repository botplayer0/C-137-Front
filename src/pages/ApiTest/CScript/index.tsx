import {
  apiScriptDebugByID,
  apiScriptDelete,
  apiScriptDetail,
  apiScriptList,
} from "@/api/config/api.script1";
import useScriptStore from "@/store/script.store";
import { StoreScriptList } from "@/types/config/script/store.type";
import { message, Modal, Popconfirm, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import CScriptModal from "./components/CScriptModal";

interface IModalInfo {
  [key: string]: any;
}

const CScript: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tableTotal, setTableTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 20;

  const {
    scriptList,
    setScriptList,
    setCurrentScriptInfo,
    clearCurrentScriptInfo,
  } = useScriptStore();

  const fetchScriptList = async (
    page?: number,
    pageSize?: number,
    tag?: string
  ) => {
    const result = await apiScriptList(
      (page = page),
      (pageSize = pageSize),
      tag
    );
    console.log(result);
    if (result.code === 0) {
      setScriptList(result.data);
      setTableTotal(result.total ?? 0);
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    fetchScriptList();
  }, []);

  const debugInfo = (varKey: string, infoMessage: IModalInfo) => {
    Modal.info({
      title: "调试结果",
      content: (
        <div>
          <p>提取变量: {varKey}</p>
          <p>返回结果: {JSON.stringify(infoMessage[varKey])}</p>
        </div>
      ),
    });
  };

  const handleUpdateScript = (data: any) => {
    // 更新脚本
    console.log(data);
  };

  const handleAddScript = (data: any) => {
    // 新增脚本
    console.log(data);
  };

  const handleDeleteScript = async (cs_id: number) => {
    // 删除脚本
    const delScript = await apiScriptDelete(cs_id, {});
    if (delScript.code === 0) {
      // 删除成功后只fillter掉, 不用重复请求接口先
      setScriptList(scriptList.filter((item) => item.cs_id != cs_id));
    } else {
      message.error(`删除脚本失败, ${delScript.error_msg}`);
    }
    console.log(cs_id);
  };

  const handleRunScriptByID = async (record: StoreScriptList) => {
    // 通过cs_id调试脚本返回值
    const result = await apiScriptDebugByID(record.cs_id);
    if (result.code === 0) {
      debugInfo(record.var_key, result.data);
    } else {
      message.error(result.error_msg);
    }
  };

  const handleEditScript = async (record: StoreScriptList) => {
    const fetchCSDetail = await apiScriptDetail(record.cs_id);
    if (fetchCSDetail.code === 0) {
      setIsEdit(true);
      setCurrentScriptInfo(fetchCSDetail.data);
      setOpen(true);
    } else {
      message.error(fetchCSDetail.error_msg);
    }
  };

  const columns: ColumnsType<StoreScriptList> = [
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
          <a onClick={() => handleEditScript(record)}>编辑</a>
          <a onClick={() => handleRunScriptByID(record)}>调试</a>
          <Popconfirm title="删除后无法恢复">
            <a onClick={() => handleDeleteScript(record.cs_id)}>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        rowKey={"cs_id"}
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
      ></Table>
      <div>
        <button
          onClick={() => {
            clearCurrentScriptInfo();
            setIsEdit(false);
            setOpen(true);
          }}
        >
          Button
        </button>
      </div>
      <CScriptModal
        open={open}
        setOpen={setOpen}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </div>
  );
};

export default CScript;
