import { CardActions, IconButton, Typography, Box } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Task, taskQuadrants } from '../../../../store/typings';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { changeDoneStatus, deleteTask } from '../../../../store/taskSlice';

type TaskCardButtonsProps = {
  task: Task;
};

const TaskCardButtons = ({ task }: TaskCardButtonsProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleDoneStatus = () => {
    dispatch(changeDoneStatus(task.id));
  };

  return (
    <CardActions disableSpacing sx={{ p: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
      {task.type === taskQuadrants[0] ? (
        <Typography variant="body1" sx={{ color: '#CCCCCC' }}>
          {task.deadline}
        </Typography>
      ) : (
        <Typography />
      )}
      <Box>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="delete" component="span">
          <DeleteForeverRoundedIcon />
        </IconButton>
        <IconButton onClick={handleDoneStatus} aria-label="done" component="span">
          {task.done ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default TaskCardButtons;
