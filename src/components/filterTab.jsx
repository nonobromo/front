import { Container } from "@mui/material";

function FilterTab({ taskState, setTaskState, search, setSearch }) {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 8, display: "flex" }}>
      <div className="buttons-filter-area">
        <div className="buttons-area">
          <button
            className={`task-filter-btn ${taskState === "My Tasks" ? "task-fillter-btn-fill": ""}`}
            onClick={() => setTaskState("My Tasks")}
          >
            My Tasks
          </button>
          <button
            className={`task-filter-btn ${taskState === "Unassigned Tasks" ? "task-fillter-btn-fill": ""}`}
            onClick={() => setTaskState("Unassigned Tasks")}
          >
            Unassigned Tasks
          </button>
          <button
             className={`task-filter-btn ${taskState === "All Tasks" ? "task-fillter-btn-fill": ""}`}
            onClick={() => setTaskState("All Tasks")}
          >
            All Tasks
          </button>
        </div>
        <div>
          <input type="text" className="search-box" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
    </Container>
  );
}

export default FilterTab;
