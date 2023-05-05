import { formatTimeToStr } from "@/utils/timeToString";
import { Card, Divider } from "antd";

interface IProjectCard {
  projectName: string;
  projectDesc?: string;
  updated_at: number;
  creator: string;
  projectId: number;
}

export default (props: IProjectCard) => {
  return (
    <Card
      title={props.projectName}
      style={{ width: 300 }}
      key={props.projectId}
    >
      <p style={{ color: "gray" }}>{props?.projectDesc || "暂无描述"}</p>
      <Divider style={{ margin: "10px 0" }} />
      <div style={{ textAlign: "left" }}>
        <p>创建人: {props.creator}</p>
        <p>更新时间: {formatTimeToStr(props.updated_at, false, false, true)}</p>
      </div>
    </Card>
  );
};
