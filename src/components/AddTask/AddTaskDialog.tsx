import { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import AddTask from './AddTask';

const AddTaskDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" size="large" onClick={() => setOpen(true)} sx={{ backgroundColor: '#334b45' }}>
        Add new task
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <AddTask setOpen={setOpen} />
      </Dialog>
    </>
  );
};

export default AddTaskDialog;
