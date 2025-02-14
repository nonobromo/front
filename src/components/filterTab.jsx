import { Container } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';

function FilterTab({ taskState, setTaskState, search, setSearch, display, setDisplay }) {
  return (
    <Container maxWidth={false} sx={{ marginTop: 8, display: "flex", maxWidth: "1400px" }}>
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

          {display === "list" && < FormatListBulletedIcon onClick={()=> setDisplay("grid")}/>}
          {display === "grid" && <AppsIcon onClick={()=> setDisplay("list")}/>}
        </div>
        <div>
        
        </div>
        <div>
          <input type="text" className="search-box" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
    </Container>
  );
}

export default FilterTab;
