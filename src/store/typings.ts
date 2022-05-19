export type Task = {
  id: string;
  type: TaskQuadrants;
  title: string;
  comment?: string;
  deadline?: Date;
  label?: Array<string>;
};

export const taskQuadrants = [
  'UrgentImportant',
  'UrgentNotImportant',
  'NotUrgentImportant',
  'NotUrgentNotImportant',
] as const;

export type TaskQuadrants = typeof taskQuadrants[number];
