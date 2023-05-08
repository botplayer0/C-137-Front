import { ResProjectList } from "@/types/project/api.type";
import { MenuOutlined } from "@ant-design/icons";
import { Select } from "antd";

interface ISelectType {
  value: string;
  label: string;
  projectId: number;
  key: string;
}

interface IProjectSelectProp {
  projectList: ResProjectList[];
  selectProject: number;
  setSelectProject: (projectId: number) => void;
}

export default (props: IProjectSelectProp) => {
  const converProjectToSelect = (data: ResProjectList): ISelectType => ({
    value: data.project_name,
    label: data.project_name,
    projectId: data.project_id,
    key: data.project_id.toString(),
  });

  const onChangeSelect = (projectId: number) => {
    props.setSelectProject(projectId);
  };

  return (
    <Select
      style={{ width: "100%" }}
      suffixIcon={<MenuOutlined />}
      options={props.projectList.map((item) => converProjectToSelect(item))}
      onSelect={(value, options) => onChangeSelect(options.projectId)}
      // disabled={defaultValue === null}
    />
  );
};
