interface ComponentProps {
  filter: string;
  onFilterChange: (e: any) => void;
}

const FilterComponent: React.FC<ComponentProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <>
      <select value={filter} onChange={onFilterChange}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </>
  );
};

export default FilterComponent;
