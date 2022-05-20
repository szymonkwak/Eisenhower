import { Grid, Paper } from '@mui/material';
import { Droppable } from '@react-forked/dnd';
import { TaskQuadrant } from '../../../store/typings';
import DraggableTask from './DraggableTask';

type QuadrantProps = {
  quadrant: TaskQuadrant;
};

const Quadrant = ({ quadrant }: QuadrantProps) => {
  return (
    <Grid key={quadrant.name} item xs={12} sm={6}>
      <Droppable droppableId={quadrant.name} key={quadrant.name}>
        {(provided) => {
          return (
            <Paper
              variant="outlined"
              sx={{ p: 1, m: 1, background: 'none', minHeight: 100 }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {quadrant.name}
              {quadrant.tasks.map((task, index) => (
                <DraggableTask task={task} index={index} key={task.id} />
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
