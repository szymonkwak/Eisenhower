import { Paper } from '@mui/material';
import { DragDropContext, Draggable, Droppable } from '@react-forked/dnd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { taskGroups } from '../../store/typings';
import Task from '../Task/Task';

const EisenhowerMatrix = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  return (
    <div>
      <DragDropContext onDragEnd={(e) => console.log(e)}>
        {taskGroups.map((el) => {
          return (
            <Droppable droppableId={el} key={el}>
              {(provided) => {
                return (
                  <Paper sx={{ p: 1 }} ref={provided.innerRef} {...provided.droppableProps}>
                    {el}
                    {tasks.map((task, index) => {
                      if (task.type === el)
                        return (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => {
                              return (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <Task title={task.title} />
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                    })}
                  </Paper>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default EisenhowerMatrix;
