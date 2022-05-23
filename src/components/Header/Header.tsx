import { Box, Stack, Typography } from '@mui/material';
import AddTaskDialog from '../AddTask/AddTaskDialog';
import Filter from '../Filter/Filter';

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
        <Filter />
      </Stack>
    </Stack>
  );
};

export default Header;
