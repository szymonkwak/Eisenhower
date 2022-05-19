import { Grid, Paper } from '@mui/material';
import { DragDropContext, Draggable, Droppable, DropResult } from '@react-forked/dnd';
import { RootState } from '../../store/store';
import { moveTask } from '../../store/taskSlice';
import { TaskGroups, taskGroups } from '../../store/typings';
import Task from '../Task/Task';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const EisenhowerMatrix = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks);
  const dispatch = useAppDispatch();

  const handleDrop = (e: DropResult) => {
    dispatch(moveTask({ taskId: e.draggableId, destination: e.destination?.droppableId as TaskGroups }));
  };

  return (
    <Grid container spacing={2}>
      <DragDropContext onDragEnd={handleDrop}>
        {taskGroups.map((el) => {
          return (
            <Grid key={el} item xs={12} sm={6}>
              <Droppable droppableId={el} key={el}>
                {(provided) => {
                  return (
                    <Paper sx={{ p: 1, minHeight: 100 }} ref={provided.innerRef} {...provided.droppableProps}>
                      {el}
                      {tasks.map((task, index) => {
                        if (task.type === el)
                          return (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Task title={task.title} />
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                      })}
                      {provided.placeholder}
                    </Paper>
                  );
                }}
              </Droppable>
            </Grid>
          );
        })}
      </DragDropContext>
    </Grid>
  );
};

export default EisenhowerMatrix;
