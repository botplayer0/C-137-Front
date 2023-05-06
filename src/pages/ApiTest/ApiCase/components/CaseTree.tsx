import { useDirectoryStore } from "@/store/directory.store";
import { Input, Tree } from "antd";
import React, { useState } from "react";

const { Search } = Input;

const CaseTree: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const { treeData, setTreeByExpand } = useDirectoryStore();

  const onExpand = (newExpandedKeys: React.Key[], info) => {
    if (info.expanded) {
      setTreeByExpand(1, info.node.directoryId);
    }
    console.log("what", treeData);
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, defaultData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setExpandedKeys(newExpandedKeys as React.Key[]);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  console.log("11", JSON.stringify(treeData));

  return (
    <div>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        // autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  );
};

export default CaseTree;
