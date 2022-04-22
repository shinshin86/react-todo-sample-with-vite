export type FilterType = "all" | "active" | "completed";

type Props = {
  filter: FilterType;
  setFilter: Function;
};

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  const onChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Choose task filter</h2>
      <div>
        <input
          type="checkbox"
          id="all"
          name="all"
          value="all"
          checked={filter === "all"}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor="all">All</label>
        <input
          type="checkbox"
          id="active"
          name="active"
          value="active"
          checked={filter === "active"}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor="Active">Active</label>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          value="completed"
          checked={filter === "completed"}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor="completed">Completed</label>
      </div>
    </div>
  );
};

export default Filter;
