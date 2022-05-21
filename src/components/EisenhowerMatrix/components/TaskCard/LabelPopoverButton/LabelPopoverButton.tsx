import * as React from 'react';
import { Popover, IconButton, TextField, Box } from '@mui/material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useAppDispatch } from '../../../../../hooks/reduxHooks';
import { addlabels } from '../../../../../store/taskSlice';
import { Task } from '../../../../../store/typings';

type TaskLabelPopoverButtonProps = {
  task: Task;
};

const LabelPopoverButton = ({ task }: TaskLabelPopoverButtonProps) => {
  const [labels, setLabels] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(addlabels({ taskId: task.id, labels: labels }));
    setLabels('');
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}>
        <LabelOutlinedIcon />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
            size="small"
            placeholder="separate labels by comma"
            // color="primary"
            sx={{ color: 'red' }}
          />
        </Box>
      </Popover>
    </>
  );
};

export default LabelPopoverButton;
