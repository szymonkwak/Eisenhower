import { Box, Stack, TextField, Typography } from '@mui/material';
import AddTaskDialog from '../AddTask/AddTaskDialog';

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="start"
      gap={2}
      sx={{ py: 5, px: 1, maxWidth: 1300, marginLeft: 'auto', marginRight: 'auto' }}
    >
      <Box>
        <Typography variant="h4">The Eisenhower Matrix</Typography>
        <Typography variant="h1">A space for your tasks</Typography>
      </Box>

      <Stack justifyContent="space-around" gap={1}>
        <AddTaskDialog />
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="body1">Filter by label:</Typography>
          <TextField variant="outlined" size="small" sx={{ maxWidth: 160 }} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
