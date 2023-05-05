import { create } from "zustand";
import { TreeNode } from "@/types/project/store.dir.type";
import { ResDirectory } from "@/types/project/api.dir.type";


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
}


const useDirectoryStore = create<DirectoryState>((set, get) => ({
  treeData: [],
  setTreeData: (tree) => set({ treeData: tree })
}))

export { useDirectoryStore, convertResDirectoryToTreeNode }