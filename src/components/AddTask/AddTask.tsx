import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';

const AddTask = () => {
  return (
    <Paper variant="outlined" sx={{ p: 2, m: 2, background: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h5" sx={{ alignSelf: 'center' }}>
        Add task
      </Typography>
      <TextField variant="standard" label="Title" size="small" />
      <TextField variant="standard" label="Comment" size="small" />

      <TextField
        type="date"
        label="Deadline"
        variant="standard"
        onChange={(e) => console.log(e)}
        size="small"
        InputProps={{
          startAdornment: <Box />,
        }}
      />

      <FormControl>
        <Select variant="standard" size="small" value={10} label="Type" onChange={(e) => console.log(e)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" size="small">
        Add
      </Button>
    </Paper>
  );
};

export default AddTask;
