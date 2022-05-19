import { Draggable } from '@react-forked/dnd';
import { Task } from '../../../store/typings';
import TaskCard from './TaskCard/TaskCard';

type DraggableTaskProps = {
  task: Task;
  index: number;
};

const DraggableTask = ({ task, index }: DraggableTaskProps) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <TaskCard task={task} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default DraggableTask;
