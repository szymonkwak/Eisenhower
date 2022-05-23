import { useLayoutEffect, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { filterTasks } from '../../store/taskSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(filterTasks(filter));
  }, [filter]);

  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography variant="body1">Filter by label:</Typography>
      <TextField
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ maxWidth: 160 }}
      />
    </Stack>
  );
};

export default Filter;
