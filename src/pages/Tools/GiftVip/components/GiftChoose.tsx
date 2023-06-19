import { Button, Input } from "antd";

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
        <div>
          <div style={{ display: "flex" }}>
            <div>添加个人会员天数:</div>
            <div>
              <Input width={""} />
            </div>
            <div>
              <Button>执行</Button>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            添加团队会员天数: <Input /> <Button>执行</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftChoose;
