import { Box, Grid, Paper, Typography } from '@mui/material';
import { Droppable } from '@react-forked/dnd';
import { TaskQuadrant } from '../../../store/typings';
import DraggableTask from './DraggableTask';

type QuadrantProps = {
  quadrant: TaskQuadrant;
};

const Quadrant = ({ quadrant }: QuadrantProps) => {
  return (
    <Grid key={quadrant.name} item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          m: 0,
          py: 0.3,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'primary.dark',
          color: 'white',
          borderRadius: '4px 4px 0 0',
        }}
      >
        <Typography variant="h3">{quadrant.name}</Typography>
      </Box>
      <Droppable droppableId={quadrant.name} key={quadrant.name}>
        {(provided) => {
          return (
            <Paper
              variant="outlined"
              sx={{
                p: 0,
                m: 0,
                borderRadius: '0 0 4px 4px',
                background: '#daded480',
                minHeight: '30vh',
                flexGrow: 1,
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {quadrant.tasks.map((task, index) => (
                <DraggableTask task={task} quadrantName={quadrant.name} index={index} key={task.id} />
              ))}
              {provided.placeholder}
            </Paper>
          );
        }}
      </Droppable>
    </Grid>
  );
};

export default Quadrant;
