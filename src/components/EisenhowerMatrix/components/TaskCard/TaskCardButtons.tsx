import { CardActions, IconButton, Box } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Task } from '../../../../store/typings';
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
      <Box>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="delete">
          <DeleteForeverRoundedIcon />
        </IconButton>
        <IconButton onClick={handleDoneStatus} aria-label="done">
          {task.done ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default TaskCardButtons;
