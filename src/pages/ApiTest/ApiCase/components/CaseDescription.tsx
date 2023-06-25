import { TypeApiCaseDetail } from "@/types/apicase/api.type";
import { Descriptions } from "antd";

interface IPropCaseDesc {
  case_info: TypeApiCaseDetail;
}

export default (props: IPropCaseDesc) => {
  return (
    <Descriptions title={props.case_info.name} column={4}>
      <Descriptions.Item label="用例名称">
        {props.case_info.name}
      </Descriptions.Item>
      <Descriptions.Item label="请求类型">
        {props.case_info.request_type}
      </Descriptions.Item>
      <Descriptions.Item label="请求URL" span={2}>
        {props.case_info.url}
      </Descriptions.Item>

      <Descriptions.Item label="请求方式">
        {props.case_info.method}
      </Descriptions.Item>
      <Descriptions.Item label="用例等级">
        {props.case_info.priority}
      </Descriptions.Item>
      <Descriptions.Item label="用例状态">
        {props.case_info.status}
      </Descriptions.Item>
      <Descriptions.Item label="用例标签">
        {props.case_info.tag}
      </Descriptions.Item>
      <Descriptions.Item label="创建人">
        {props.case_info.create_user}
      </Descriptions.Item>
      <Descriptions.Item label="更新人">
        {props.case_info.update_user}
      </Descriptions.Item>
      <Descriptions.Item label="创建时间">
        {props.case_info.created_at}
      </Descriptions.Item>
      <Descriptions.Item label="更新时间">
        {props.case_info.updated_at}
      </Descriptions.Item>
    </Descriptions>
  );
};
