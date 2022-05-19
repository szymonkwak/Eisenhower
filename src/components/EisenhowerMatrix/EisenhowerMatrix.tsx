import { Grid } from '@mui/material';
import { DragDropContext, DropResult } from '@react-forked/dnd';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { moveTask } from '../../store/taskSlice';
import { TaskQuadrants, taskQuadrants } from '../../store/typings';
import Quadrant from './components/Quadrant';

const EisenhowerMatrix = () => {
  const dispatch = useAppDispatch();

  const handleDrop = (e: DropResult) => {
    dispatch(
      moveTask({
        taskId: e.draggableId,
        destination: e.destination?.droppableId as TaskQuadrants,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Grid container spacing={2}>
        {taskQuadrants.map((quadrant) => {
          return <Quadrant name={quadrant} key={quadrant} />;
        })}
      </Grid>
    </DragDropContext>
  );
};

export default EisenhowerMatrix;
