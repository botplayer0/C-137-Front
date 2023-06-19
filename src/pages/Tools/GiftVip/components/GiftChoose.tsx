import { Button, Input, Space } from "antd";

interface IPropGiftType {
  giftType: number;
  addDays?: number;
  expiredTo?: number;
  children: React.Node;
}

const GiftChoose: React.FC<IPropGiftType> = (props) => {
  return (
    <div
      style={{
        width: "1000px",
        height: "500px",
        border: "2px solid #000",
        borderRadius: "20px",
      }}
    >
      {props.giftType === 1 && (
        <>
          <Space>
            <p>添加个人会员天数:</p>
            <Input />
            <Button>执行</Button>
          </Space>
          <br />
          <br />
          <Space>
            <p>添加团队会员天数:</p>
            <Input />
            <Button>执行</Button>
          </Space>
        </>
      )}
    </div>
  );
};

export default GiftChoose;
