import { FormControl, MenuItem, Select, TextField, Typography, Paper, Button } from '@mui/material';
import { Box } from '@mui/system';
import { SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addNewTask } from '../../store/taskSlice';
import { QuadrantNames, quadrantNames } from '../../store/typings';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [deadline, setDeadline] = useState('');
  const [taskType, setTaskType] = useState<QuadrantNames>(quadrantNames[0]);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({ type: taskType, title, comment, deadline });
    dispatch(addNewTask({ type: taskType, task: { title, comment, deadline } }));
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      variant="outlined"
      sx={{ p: 2, m: 2, background: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <Typography variant="h5" sx={{ alignSelf: 'center' }}>
        Add task
      </Typography>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        variant="standard"
        label="Title"
        size="small"
      />
      <TextField
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="standard"
        label="Comment"
        size="small"
      />
      <TextField
        type="date"
        value={deadline}
        label="Deadline"
        variant="standard"
        onChange={(e) => setDeadline(e.target.value)}
        size="small"
        InputProps={{
          startAdornment: <Box />,
        }}
      />

      <FormControl>
        <Select
          variant="standard"
          size="small"
          value={taskType}
          label="Type"
          onChange={(e) => setTaskType(e.target.value as QuadrantNames)}
        >
          {quadrantNames.map((name) => (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="outlined" size="small">
        Add
      </Button>
    </Paper>
  );
};

export default AddTask;
