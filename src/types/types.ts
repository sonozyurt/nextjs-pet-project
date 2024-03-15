export interface TaskItemListProps {
  tasks: Task[];
}

export interface CategoryPillProps {
  index: number;
  tasksToggleFunc: (index: number) => void;
}

export interface PillContentProps {
  index: number;
}

type Task = { id: number };
export type MockCategories = { index: number; tasks: Task[] }[];
