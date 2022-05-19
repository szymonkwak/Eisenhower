import { Grid, Paper } from '@mui/material';
import { RootState } from '../../../store/store';
import { Droppable } from '@react-forked/dnd';
import { useSelector } from 'react-redux';
import { TaskQuadrants } from '../../../store/typings';
import DraggableTask from './DraggableTask';

type QuadrantProps = {
  name: TaskQuadrants;
};

const Quadrant = ({ name }: QuadrantProps) => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <Grid key={name} item xs={12} sm={6}>
      <Droppable droppableId={name} key={name}>
        {(provided) => {
          return (
            <Paper
              variant="outlined"
              sx={{ p: 1, m: 1, background: 'none', minHeight: 100 }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {name}
              {tasks.map((task, index) => {
                if (task.type === name) return <DraggableTask task={task} index={index} key={task.id} />;
              })}
              {provided.placeholder}
            </Paper>
          );
        }}
      </Droppable>
    </Grid>
  );
};

export default Quadrant;
