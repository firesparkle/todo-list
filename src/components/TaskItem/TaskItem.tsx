import { ITaskItem } from "../../models/ITaskItem";
import "./taskItem.css";

interface ComponentProps {
  taskItem: ITaskItem;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string, isChecked: boolean) => void;
}

const TaskItem: React.FC<ComponentProps> = ({
  taskItem,
  onDeleteTask,
  onCompleteTask,
}) => {
  const onCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCompleteTask(taskItem.id, e.target.checked);
  };

  const onDeleteItem = () => {
    onDeleteTask(taskItem.id);
  };

  return (
    <div className="task-item-container">
      <div className="task-title">{taskItem.title}</div>
      <input
        type="checkbox"
        checked={taskItem.isChecked}
        onChange={onCheckedChange}
      />
      <div className="delete-item" onClick={onDeleteItem}>
        Delete
      </div>
    </div>
  );
};

export default TaskItem;
