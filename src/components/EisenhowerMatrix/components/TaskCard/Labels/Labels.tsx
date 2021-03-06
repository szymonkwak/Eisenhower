import { Chip, Stack } from '@mui/material';
import styles from './labels.module.css';
import { Task } from '../../../../../store/typings';
import { useAppDispatch } from '../../../../../hooks/reduxHooks';
import { deleteLabel } from '../../../../../store/taskSlice';

type LabelsProps = {
  task: Task;
};

const Labels = ({ task }: LabelsProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = (index: number) => {
    dispatch(
      deleteLabel({
        taskId: task.id,
        labelIndex: index,
      })
    );
  };

  return (
    <Stack direction="row" spacing={0.5} className={styles.labelChips}>
      {task.labels.map((label, index) => (
        <Chip
          size="small"
          variant="outlined"
          color="secondary"
          label={label}
          key={index}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </Stack>
  );
};

export default Labels;
