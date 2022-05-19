import { Card, CardHeader, CardContent, CardActions, Divider, IconButton, Typography } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { Task } from '../../../store/typings';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { deleteTask } from '../../../store/taskSlice';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <Card key={task.id} variant="outlined" sx={{ p: 1 }}>
      <CardHeader sx={{ p: 0 }} title={task.title} subheader="Date 1" />
      <Divider />
      <CardContent sx={{ p: 0 }}>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ p: 0, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton color="primary" aria-label="label" component="span">
          <LabelOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleDelete} color="primary" aria-label="delete" component="span">
          <DeleteForeverRoundedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="done" component="span">
          <DoneOutlineRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
