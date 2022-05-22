import { Card, CardContent, Typography, Divider, Stack } from '@mui/material';
import { Task, QuadrantNames, quadrantNames } from '../../../../store/typings';
import TaskCardActions from './TaskCardActions/TaskCardActions';

type TaskCardProps = {
  task: Task;
  quadrantName: QuadrantNames;
};

const TaskCard = ({ task, quadrantName }: TaskCardProps) => {
  return (
    <Card sx={{ m: 1, px: 1.5, py: 1, opacity: `${task.done ? 0.4 : 1}` }}>
      <Typography variant="h2">{task.title}</Typography>
      <Divider variant="fullWidth" sx={{ backgroundColor: 'white', borderBottomWidth: 2 }} />

      <CardContent sx={{ mt: 0.5 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" color="secondary">
            {task.comment}
          </Typography>
          {quadrantName === quadrantNames[0] ? (
            <Typography variant="body1" color="secondary">
              {task.deadline}
            </Typography>
          ) : null}
        </Stack>
      </CardContent>
      <TaskCardActions task={task} />
    </Card>
  );
};

export default TaskCard;
