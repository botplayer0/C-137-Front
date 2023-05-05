interface TreeNode {
  key: string;
  title: string;
  type: 'directory' | 'case';
  children?: TreeNode[];
  isLeaf?: boolean;
  directoryId?: number
  caseId?: number
  method?: string
}

export type { TreeNode }