import { Card, CardHeader, CardContent, CardActions, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const TaskCard = ({ title }: any) => {
  return (
    <Card variant="outlined" sx={{ p: 1 }}>
      <CardHeader sx={{ p: 0 }} title={title} subheader="Date 1" />
      <Divider />
      <CardContent sx={{ p: 0 }}>
        <Typography variant="body1" color="text.secondary">
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

export default TaskCard;
