import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Task } from '../../../../store/typings';
import TaskCardActions from './TaskCardActions';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card sx={{ m: 1, px: 1.5, pt: 1, pb: 0.5, opacity: `${task.done ? 0.4 : 1}` }}>
      <CardHeader sx={{ p: 0 }} title={task.title} />

      <CardContent sx={{ p: 0 }}>
        <Typography variant="body1" color="secondary">
          {task.comment}
        </Typography>
      </CardContent>

      <TaskCardActions task={task} />
    </Card>
  );
};

export default TaskCard;
