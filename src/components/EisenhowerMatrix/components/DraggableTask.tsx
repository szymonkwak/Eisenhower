import { Draggable } from '@react-forked/dnd';
import { QuadrantNames, Task } from '../../../store/typings';
import TaskCard from './TaskCard/TaskCard';

type DraggableTaskProps = {
  task: Task;
  quadrantName: QuadrantNames
  index: number;
};

const DraggableTask = ({ task, quadrantName, index }: DraggableTaskProps) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <TaskCard task={task} quadrantName={quadrantName} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default DraggableTask;
