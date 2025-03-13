export const FilterTypeEnum = {
  all: "all",
  active: "active",
  completed: "completed",
} as const;

export type FilterType = (typeof FilterTypeEnum)[keyof typeof FilterTypeEnum];
