import { Container, Typography } from "@mui/material";
import FilterTab from "../components/filterTab";

import useAllTasks from "../hooks/getTasks";
import { useAuth } from "../context/auth.context";
import { useState } from "react";
import ListTaskShowCase from "../components/listTaskShowCase";
import GridTaskShowCase from "../components/gridTaskShowCase";

function MainPage() {
  const { allTasks } = useAllTasks();
  const { user } = useAuth();
  const [taskState, setTaskState] = useState("All Tasks");
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("list");
  let displayedTasks = [];

  if (taskState === "My Tasks") {
    displayedTasks = allTasks.filter(
      (task) => task.assignedTo.user_id === user._id && !task.complete
    );
  } else if (taskState === "Unassigned Tasks") {
    displayedTasks = allTasks.filter(
      (task) => !task.assignedTo?.name && !task.complete
    );
  } else {
    displayedTasks = allTasks.filter((task) => !task.complete);
  }

  displayedTasks = search
    ? displayedTasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      )
    : displayedTasks;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1400px",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: 8,
      }}
    >
      <Typography
        sx={{ mt: 4, fontSize: { xs: 36, lg: 48 } }}
        variant="h1"
        mt={4}
      >
        It's time to do some Basic
      </Typography>

      <FilterTab
        taskState={taskState}
        setTaskState={setTaskState}
        setSearch={setSearch}
        display={display}
        setDisplay={setDisplay}
      />

      {display === "list" && (
        <ListTaskShowCase displayedTasks={displayedTasks} />
      )}

      {display === "grid" && (
        <GridTaskShowCase displayedTasks={displayedTasks} />
      )}
    </Container>
  );
}

export default MainPage;
