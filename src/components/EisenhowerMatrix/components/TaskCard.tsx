import { Card, CardHeader, CardContent, CardActions, Divider, IconButton, Typography } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Task } from '../../../store/typings';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { changeDoneStatus, deleteTask } from '../../../store/taskSlice';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleDoneStatus = () => {
    dispatch(changeDoneStatus(task.id));
  };

  // TODO styling based on done status

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
        <IconButton onClick={handleDoneStatus} color="primary" aria-label="done" component="span">
          {task.done ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
