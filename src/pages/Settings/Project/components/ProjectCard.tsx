import { Card } from "antd";

interface IProjectCard {
  projectName: string;
  projectDesc?: string;
  updated_at: number;
  creator: string;
}

export default (props: IProjectCard) => {
  return (
    <Card
      title={props.projectName}
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>{props?.projectDesc || "暂无描述"}</p>
      <p>创建人: {props.creator}</p>
      <p>最后更新时间: {props.updated_at}</p>
    </Card>
  );
};
