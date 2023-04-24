import { Card } from "antd";

interface IProjectCard {
  projectName: string;
  projectDesc?: string;
  create_at: number;
  creator: number;
  public: boolean;
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
      <p>创建时间: {props.create_at}</p>
    </Card>
  );
};
