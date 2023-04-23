import { Select } from "antd";
export default () => {
  return (
    <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      options={[
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
      ]}
    />
  );
};
