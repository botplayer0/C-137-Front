import { List } from "antd";
import "./index.css";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export default () => {
  return (
    <div className="sqldebug-container">
      <div className="database-list">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
      <div className="query-block">
        <div className="query-statement">数据库语句</div>
        <div className="query-result">数据库结果</div>
      </div>
    </div>
  );
};
