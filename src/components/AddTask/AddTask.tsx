import { MenuItem, Select, TextField, Typography, Paper, Button, Stack, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addNewTask } from '../../store/taskSlice';
import { QuadrantNames, quadrantNames } from '../../store/typings';

type AddTaskProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTask = ({ setOpen }: AddTaskProps) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [deadline, setDeadline] = useState('');
  const [labelsString, setLabelsString] = useState('');
  const [taskType, setTaskType] = useState<QuadrantNames>(quadrantNames[0]);

  const isMobile = useMediaQuery('(max-width:600px)');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addNewTask({ type: taskType, task: { title, comment, deadline }, labelsString }));
    setTitle('');
    setComment('');
    setDeadline('');
    setLabelsString('');
    setTaskType(quadrantNames[0]);
    setOpen(false);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      variant="outlined"
      sx={{ m: isMobile ? 2 : 4, p: isMobile ? 2 : 4, background: '#daded4df' }}
    >
      <Stack gap={2} sx={{ minWidth: `${isMobile ? null : '320px'}` }}>
        <Typography variant="h2" sx={{ mb: 2, alignSelf: 'center' }}>
          A thing to be done
        </Typography>

        <TextField value={title} onChange={(e) => setTitle(e.target.value)} required autoFocus label="Title" />

        <TextField value={comment} onChange={(e) => setComment(e.target.value)} label="Comment" />

        <TextField
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          label="Deadline"
          InputProps={{
            startAdornment: <Box />,
          }}
        />

        <TextField
          value={labelsString}
          onChange={(e) => setLabelsString(e.target.value)}
          label="Labels"
          placeholder="Labels separated by comma"
        />

        <Select value={taskType} onChange={(e) => setTaskType(e.target.value as QuadrantNames)}>
          {quadrantNames.map((name) => (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          ))}
        </Select>

        <Button type="submit" variant="contained">
          Save
        </Button>
      </Stack>
    </Paper>
  );
};

export default AddTask;
