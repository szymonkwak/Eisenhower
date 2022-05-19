import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Task } from '../../../../store/typings';
import TaskCardButtons from './TaskCardButtons';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  // TODO styling based on done status

  return (
    <Card variant="outlined" sx={{ p: 1, m: 1 }}>
      <CardHeader sx={{ p: 0 }} title={task.title} />

      <CardContent sx={{ p: 0 }}>
        <Typography variant="body1" sx={{ color: '#CCCCCC' }}>
          {task.comment}
        </Typography>
      </CardContent>

      <TaskCardButtons task={task} />
    </Card>
  );
};

export default TaskCard;
