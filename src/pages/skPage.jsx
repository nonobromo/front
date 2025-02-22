import { Container, Typography } from "@mui/material";
import { useState } from "react";
import TasksOverview from "../components/tasksOverview";
import Useroverview from "../components/usersOverview";
import UsersManage from "../components/usersManage";
import TasksManage from "../components/tasksManage";

function SkPage() {
  const [skDisplay, setSkdisplay] = useState("t-overview");

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px", marginBottom: 3 }}>
      <Typography fontSize={48} mt={4} variant="h1">
        Shop Keeper Dashboard
      </Typography>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          marginBottom: "24px",
          marginTop: "24px",
          display: "flex",
        }}
      >
        <div className="buttons-filter-area">
          <div className="buttons-area">
            <button
              className={`task-filter-btn ${
                skDisplay === "t-overview" ? "task-fillter-btn-fill" : ""
              }`}
              onClick={() => setSkdisplay("t-overview")}
            >
              Tasks Overview
            </button>

            <button
              className={`task-filter-btn ${
                skDisplay === "u-overview" ? "task-fillter-btn-fill" : ""
              }`}
              onClick={() => setSkdisplay("u-overview")}
            >
              Users Overview
            </button>

            <button
              className={`task-filter-btn ${
                skDisplay === "u-manage" ? "task-fillter-btn-fill" : ""
              }`}
              onClick={() => setSkdisplay("u-manage")}
            >
              Manage Users
            </button>

            <button
              className={`task-filter-btn ${
                skDisplay === "t-manage" ? "task-fillter-btn-fill" : ""
              }`}
              onClick={() => setSkdisplay("t-manage")}
            >
              Manage Tasks
            </button>
          </div>
        </div>
      </Container>

      {skDisplay === "t-overview" && <TasksOverview />}
      {skDisplay === "u-overview" && <Useroverview />}
      {skDisplay === "u-manage" && <UsersManage />}
      {skDisplay === "t-manage" && <TasksManage />}
    </Container>
  );
}

export default SkPage;
