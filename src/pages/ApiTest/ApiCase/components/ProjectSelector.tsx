import { MenuOutlined } from "@ant-design/icons";
import { Select } from "antd";

export default () => {
  return (
    <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      suffixIcon={<MenuOutlined />}
      options={[
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
      ]}
    />
  );
};
