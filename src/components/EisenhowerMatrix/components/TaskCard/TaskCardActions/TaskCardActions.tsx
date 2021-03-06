import { CardActions, IconButton, Stack } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Task } from '../../../../../store/typings';
import { useAppDispatch } from '../../../../../hooks/reduxHooks';
import { changeDoneStatus, deleteTask } from '../../../../../store/taskSlice';
import LabelPopoverButton from '../LabelPopoverButton/LabelPopoverButton';
import Labels from '../Labels/Labels';

type TaskCardButtonsProps = {
  task: Task;
};

const TaskCardActions = ({ task }: TaskCardButtonsProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleDoneStatus = () => {
    dispatch(changeDoneStatus(task.id));
  };

  return (
    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
      <Labels task={task} />
      <Stack direction="row">
        <LabelPopoverButton task={task} />
        <IconButton onClick={handleDelete} aria-label="delete">
          <DeleteForeverRoundedIcon />
        </IconButton>
        <IconButton onClick={handleDoneStatus} aria-label="done">
          {task.done ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
      </Stack>
    </CardActions>
  );
};

export default TaskCardActions;
