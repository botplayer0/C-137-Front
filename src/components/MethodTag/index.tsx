import { Tag } from "antd";

interface MethodTagProp {
  tagName: string;
  size: "small" | "normal";
}

export default (props: MethodTagProp) => {
  const tagName = props.tagName.toLowerCase();
  let color = "cyan";
  if (tagName === "get") {
    color = "#87d068";
  } else if (tagName === "post") {
    color = "#108ee9";
  } else if (tagName === "put") {
    color = "orange";
  } else if (tagName === "delete") {
    color = "#f50";
  } else {
    color = "cyan";
  }
  const sizeWidth = props.size === "small" ? "70px" : "100px";
  return (
    <Tag style={{ maxWidth: sizeWidth }} color={color}>
      {props.tagName.toUpperCase()}
    </Tag>
  );
};
