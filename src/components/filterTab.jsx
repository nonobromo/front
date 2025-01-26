import { Container } from "@mui/material";

function FilterTab({ taskState, setTaskState }) {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 8, display: "flex" }}>
      <div className="buttons-filter-area">
        <div className="buttons-area">
          <button
            className="task-filter-btn"
            onClick={() => setTaskState("My Tasks")}
          >
            My Tasks
          </button>
          <button
            className="task-filter-btn"
            onClick={() => setTaskState("Unassigned Tasks")}
          >
            Unassigned Tasks
          </button>
          <button
            className="task-filter-btn"
            onClick={() => setTaskState("All Tasks")}
          >
            All Tasks
          </button>
        </div>
        <div>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>
    </Container>
  );
}

export default FilterTab;
