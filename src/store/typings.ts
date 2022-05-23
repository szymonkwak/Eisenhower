export type TaskQuadrant = {
  name: QuadrantNames;
  tasks: Array<Task>;
};

export type Task = {
  id: string;
  title: string;
  done: boolean;
  comment: string;
  deadline: string;
  labels: Array<string>;
  inFilter: boolean;
};

export const quadrantNames = [
  'Urgent & Important',
  'Urgent & Not important',
  'Not urgent & Important',
  'Not urgent & Not important',
] as const;

export type QuadrantNames = typeof quadrantNames[number];
