import { create } from "zustand";
import { TreeNode } from "@/types/project/store.dir.type";
import { ResDirectory } from "@/types/project/api.dir.type";
import { apiDirectoryChild } from "@/api/project/api.project.dir";

const converResToTreeNode = (res: ResDirectory): TreeNode => {
  // 转化响应成树节点
  const node: TreeNode = {
    key: res.type === "directory" ? `dir_${res.directory_id}` : `case_${res.case_id}`,
    title: res.name,
    type: res.type,
    isLeaf: res.type === "case",
    children: [],
    caseId: res?.case_id,
    directoryId: res.directory_id,
    parentId: res.type === "case" ? res.directory_id : res?.parent_id,
    method: res?.method
  }
  return node
}

const insertToTree = (treeData: TreeNode[], resData: ResDirectory) => {
  const node: TreeNode = converResToTreeNode(resData)
  treeData.forEach((item) => {
    if (item.directoryId === node.parentId) {
      item.children.push(node)
      return true
    } else {
      insertToTree(item.children, resData)
    }
  })
}

const updateTreeData = (treeData: TreeNode[], directoryId: number, resData: ResDirectory[]) => {
  treeData.map((node) => {
    if (node.directoryId === directoryId) {
      return {
        ...node,
        children: resData.map((item) => converResToTreeNode(item))
      }
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, directoryId, resData)
      }
    }
  })
}


const convertResDirectoryToTreeNode = (resDirectories: ResDirectory[], parentId?: number): TreeNode[] => {
  const nodes: TreeNode[] = [];

  for (const resDir of resDirectories) {
    if (parentId && resDir.parent_id !== parentId) continue;

    const node: TreeNode = {
      key: resDir.type === "directory" ? `dir_${resDir.directory_id}` : `case_${resDir.case_id}`,
      title: resDir.name,
      type: resDir.type === "directory" ? "directory" : "case",
      isLeaf: resDir.type === "case",
      children: resDir.type === "directory" ? convertResDirectoryToTreeNode(resDirectories, resDir.directory_id) : [],
      directoryId: resDir.directory_id,
      caseId: resDir.case_id
    };

    nodes.push(node);
  }

  return nodes;
};


interface DirectoryState {
  treeData: TreeNode[]
  setTreeData: (tree: TreeNode[]) => void
  setRootTree: (res: ResDirectory[]) => void
  setTreeByExpand: (projectId: number, directoryId: number) => void
}


const useDirectoryStore = create<DirectoryState>((set, get) => ({
  treeData: [],
  setTreeData: (tree) => set({ treeData: tree }),
  setRootTree: (res) => {
    const rootTree = []
    for (const c of res) {
      rootTree.push(converResToTreeNode(c))
    }
    set({ treeData: rootTree })
  },
  setTreeByExpand: async (projectId, directoryId) => {
    const response = await apiDirectoryChild(projectId, directoryId)
    const tempData = get().treeData
    updateTreeData(tempData, directoryId, response.data)
    set({ treeData: tempData })
  }
}))

export { useDirectoryStore, convertResDirectoryToTreeNode }