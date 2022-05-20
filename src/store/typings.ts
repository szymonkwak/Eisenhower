export type Task = {
  id: string;
  type: TaskQuadrants;
  title: string;
  done: boolean;
  comment?: string;
  deadline?: string;
  label?: Array<string>;
};

export const taskQuadrants = [
  'Urgent & Important',
  'Urgent & Not important',
  'Not urgent & Important',
  'Not urgent & Not important',
] as const;

export type TaskQuadrants = typeof taskQuadrants[number];
