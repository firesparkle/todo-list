import { ITaskItem } from "../../models/ITaskItem";
import TaskItem from "../TaskItem/TaskItem";

interface ComponentProps {
  tasks: ITaskItem[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string, isChecked: boolean) => void;
}

const ListingComponent: React.FC<ComponentProps> = ({
  tasks,
  onDeleteTask,
  onCompleteTask,
}) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <TaskItem
            taskItem={task}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
            key={task.id}
          ></TaskItem>
        );
      })}
    </>
  );
};

export default ListingComponent;
