import { Grid } from '@mui/material';
import { DragDropContext, DropResult } from '@react-forked/dnd';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { RootState } from '../../store/store';
import { moveTask } from '../../store/taskSlice';
import { QuadrantNames } from '../../store/typings';
import Quadrant from './components/Quadrant';

const EisenhowerMatrix = () => {
  const tasksState = useAppSelector((state: RootState) => state.tasks);

  const dispatch = useAppDispatch();

  const handleDrop = (e: DropResult) => {
    dispatch(
      moveTask({
        taskId: e.draggableId,
        destination: e.destination?.droppableId as QuadrantNames,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Grid container spacing={1}>
        {tasksState.map((quadrant) => {
          return <Quadrant quadrant={quadrant} key={quadrant.name} />;
        })}
      </Grid>
    </DragDropContext>
  );
};

export default EisenhowerMatrix;
