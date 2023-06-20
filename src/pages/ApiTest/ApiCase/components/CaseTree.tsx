import {
  apiDirectoryChild,
  apiDirectoryRoot,
} from "@/api/project/api.project.dir";
import MethodTag from "@/components/MethodTag";
import { ResDirectory } from "@/types/project/api.dir.type";
import { TreeNode } from "@/types/project/store.dir.type";
import { Tree } from "antd";
import React, { useEffect, useState } from "react";
import "./CaseTree.css";

const converResToTreeNode = (res: ResDirectory): TreeNode => {
  // 转化响应成树节点
  const node: TreeNode = {
    key:
      res.type === "directory"
        ? `dir_${res.directory_id}`
        : `case_${res.case_id}`,
    title: res.name,
    type: res.type,
    isLeaf: res.type === "case",
    children: [],
    caseId: res?.case_id,
    directoryId: res.directory_id,
    parentId: res.type === "case" ? res.directory_id : res?.parent_id,
    method: res?.method,
    icon: res.type === "case" ? <MethodTag tagName={res.method} /> : null,
  };
  return node;
};

const updateTreeData = (
  treeData: TreeNode[],
  directoryId: number,
  resData: ResDirectory[]
) => {
  treeData.map((node) => {
    if (node.directoryId === directoryId) {
      return {
        ...node,
        children: resData.map((item) => converResToTreeNode(item)),
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, directoryId, resData),
      };
    }
  });
};

const deepInsertCaseTree = (
  orignalTree: TreeNode,
  directoryId: number,
  response: ResDirectory[]
) => {
  if (orignalTree.directoryId === directoryId) {
    orignalTree.children = response.map((item) => converResToTreeNode(item));
  } else {
    orignalTree.children?.forEach((item, index) =>
      deepInsertCaseTree(item, directoryId, response)
    );
  }
};

// It's just a simple demo. You can use tree map to optimize update perf.

interface ICaseTreeProps {
  projectId: number;
  onSelectNode: (info) => void;
}

const CaseTree: React.FC<ICaseTreeProps> = (props) => {
  const [treeData, setTreeData] = useState([]);

  const fetchRootTree = async (projectId: number) => {
    if (projectId === 0) {
      return;
    }
    const response = await apiDirectoryRoot(projectId);

    setTreeData(response.data.map((item) => converResToTreeNode(item)));
  };

  const fetchTreeChild = async (projectId: number, directoryId: number) => {
    const response = await apiDirectoryChild(projectId, directoryId);
    return response.data || [];
  };

  useEffect(() => {
    if (props.projectId) {
      fetchRootTree(props.projectId);
    }
  }, [props.projectId]);

  const onLoadData = async ({ key, directoryId, children }: any) => {
    if (children && children.length > 0) {
      return;
    }
    fetchTreeChild(props.projectId, directoryId).then((res) => {
      let cc = treeData.map((item) => {
        deepInsertCaseTree(item, directoryId, res);
        return item;
      });
      setTreeData(cc);
    });
  };
  return (
    <Tree
      loadData={onLoadData}
      treeData={treeData}
      showIcon={true}
      onSelect={(_, info) => props.onSelectNode(info)}
    />
  );
};

export default CaseTree;
