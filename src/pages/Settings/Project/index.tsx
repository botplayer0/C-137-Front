import { apiProjectList } from "@/api/project/api.project";
import useProjectStore from "@/store/project.store";
import { Col, Row } from "antd";
import { useEffect } from "react";

export default () => {
  const { projectList, setProjectList } = useProjectStore();

  const fetchProjectList = async () => {
    const response = await apiProjectList();
    console.log(response);
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <>
      <Row>
        <Col>11</Col>
      </Row>
    </>
  );
};
