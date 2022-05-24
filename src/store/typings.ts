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
  'Important & Urgent',
  'Important but not urgent',
  'Urgent but not important',
  'Neither urgent nor important',
] as const;

export type QuadrantNames = typeof quadrantNames[number];
