import useProjectStore from "@/store/project.store";
import { MenuOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useEffect } from "react";

export default () => {
  const { projectList, setProjectList, fetchProjectList } = useProjectStore();

  const converProjectToSelect = (data: ResProjectList) => ({
    value: data.project_name,
    label: data.project_name,
    projectId: data.project_id,
    key: data.project_id,
  });

  useEffect(() => {
    if (projectList.length === 0) {
      fetchProjectList();
    }
  }, []);

  return (
    <Select
      style={{ width: "100%" }}
      defaultValue={
        projectList.length > 0 ? converProjectToSelect(projectList[0]) : ""
      }
      suffixIcon={<MenuOutlined />}
      options={projectList.map((item) => converProjectToSelect(item))}
    />
  );
};
