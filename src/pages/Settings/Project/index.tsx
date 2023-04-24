import { apiProjectList } from "@/api/project/api.project";
import useProjectStore from "@/store/project.store";
import { Col, Row } from "antd";
import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

export default () => {
  const { projectList, setProjectList } = useProjectStore();

  const fetchProjectList = async () => {
    const response = await apiProjectList();
    if (response.code === 0) {
      setProjectList(response.data);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  console.log(projectList);

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
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
