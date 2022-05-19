import { Draggable } from '@react-forked/dnd';
import { Task } from '../../../store/typings';
import TaskCard from './TaskCard';

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
            <TaskCard title={task.title} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default DraggableTask;
