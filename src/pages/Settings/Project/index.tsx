import useProjectStore from "@/store/project.store";
import { Col, Row } from "antd";
import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

export default () => {
  const { projectList, setProjectList, fetchProjectList } = useProjectStore();

  // const fetchProjectList = async () => {
  //   const response = await apiProjectList();
  //   if (response.code === 0) {
  //     setProjectList(response.data);
  //   }
  // };

  useEffect(() => {
    if (projectList.length === 0) {
      fetchProjectList();
    }
  }, []);

  return (
    <>
      <Row>
        {projectList.map((item) => (
          <Col key={item.project_id}>
            <ProjectCard
              projectName={item.project_name}
              projectDesc={item?.desc}
              creator={item.user_name}
              updated_at={item.updated_at}
              projectId={item.project_id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
