import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Task = ({ title }: any) => {
  return (
    <Card variant="outlined" sx={{ p: 1, maxWidth: 350 }}>
      <CardHeader sx={{ p: 0 }} action={<Button>V</Button>} title={title} subheader="Date 1" />
      <CardContent sx={{ p: 0 }}>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ p: 0, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained">X</Button>
        <Button>Y</Button>
        <Button>Z</Button>
      </CardActions>
    </Card>
  );
};

export default Task;
