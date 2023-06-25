import { MenuOutlined } from "@ant-design/icons";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Switch, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }

interface DataType {
  key: string;
  name: string;
  sort: number;
  executeType: number;
  returnValue: string;
  isEnable: boolean;
}

interface DraggableTableProps {
  data: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    key: "sort",
  },
  {
    title: "名称",
    dataIndex: "name",
  },
  {
    title: "执行类型",
    dataIndex: "executeType",
  },
  {
    title: "返回值",
    dataIndex: "returnValue",
  },
  {
    title: "启用",
    dataIndex: "isEnable",
    render: (isEnabled: boolean) => <Switch checked={isEnabled} />,
  },
  {
    title: "操作",
    render: () => (
      <div>
        <a>编辑</a>
        <a>删除</a>
      </div>
    ),
  },
];

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string;
}

const Row = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === "sort") {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: "none", cursor: "move" }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const SuffixDragTable: React.FC<DraggableTableProps> = ({ data }) => {
  const [dataSource, setDataSource] = useState<DataType[]>(data);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          columns={columns}
          dataSource={dataSource}
        />
      </SortableContext>
    </DndContext>
  );
};

export default SuffixDragTable;
