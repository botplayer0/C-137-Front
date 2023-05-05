import useProjectStore from "@/store/project.store";
import { MenuOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useEffect } from "react";

export default () => {
  const { projectList, setProjectList, fetchProjectList } = useProjectStore();

  useEffect(() => {
    if (projectList.length === 0) {
      fetchProjectList();
    }
  }, []);

  return (
    <Select
      style={{ width: "100%" }}
      suffixIcon={<MenuOutlined />}
      options={projectList.map((item) => {
        return {
          value: item.project_name,
          label: item.project_name,
          projectId: item.project_id,
        };
      })}
    />
  );
};
