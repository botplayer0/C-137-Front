interface IPropsTag {
  method?: string;
  requestType?: number;
  status?: number;
  priority?: "P0" | "P1" | "P2" | "P3" | "P4";
}

enum HexColor {
  BABYBULE = "#ADD8E6", // 浅蓝色
  SALMON = "#FA8072", // 三文鱼
  LEMONGREEN = "#FFDAB9",
  CORALCOLOR = "#FF7F50", // 珊瑚色
  Black = "#8A2BE2",
}

export const TagsMethod = () => {};
