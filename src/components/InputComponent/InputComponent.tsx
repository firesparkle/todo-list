import "./inputComponent.css";

interface ComponentProps {
  newTitle: string;
  onChangeTitle: (e: any) => void;
  onAddTask: () => void;
}

const InputComponent: React.FC<ComponentProps> = ({
  newTitle,
  onChangeTitle,
  onAddTask,
}) => {
  return (
    <div className="input-container">
      <input type="text" value={newTitle} onChange={onChangeTitle} />
      <button className="add-item" onClick={onAddTask}>
        Add Item
      </button>
    </div>
  );
};

export default InputComponent;
