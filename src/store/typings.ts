export type Task = {
  id: string;
  type: TaskGroups;
  title: string;
  comment?: string;
  deadline?: Date;
  label?: Array<string>;
};

export const taskGroups = [
  'UrgentImportant',
  'UrgentNotImportant',
  'NotUrgentImportant',
  'NotUrgentNotImportant',
] as const;

export type TaskGroups = typeof taskGroups[number];
