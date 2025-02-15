import { Box, Container, Typography } from "@mui/material";
import FilterTab from "../components/filterTab";
import TableHeaders from "../components/common/tableHeaders";
import TaskItem from "../components/common/taskItem";
import useAllTasks from "../hooks/getTasks";
import useUser from "../hooks/getUser";
import { useAuth } from "../context/auth.context";
import { useState } from "react";
import ListTaskShowCase from "../components/listTaskShowCase";
import GridTaskShowCase from "../components/gridTaskShowCase";

function MainPage() {
  const { allTasks } = useAllTasks();
  const { user } = useAuth();
  const { userInfo } = useUser(user?._id);
  const [taskState, setTaskState] = useState("All Tasks");
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("list");
  let displayedTasks = [];

  if (taskState === "My Tasks") {
    displayedTasks = allTasks.filter(
      (task) => task.assignedTo.user_id === user._id
    );
  } else if (taskState === "Unassigned Tasks") {
    displayedTasks = allTasks.filter((task) => !task.assignedTo?.name);
  } else {
    displayedTasks = allTasks;
  }

  displayedTasks = search
    ? displayedTasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLocaleLowerCase())
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
      <Typography fontSize="4rem" variant="h1" mt={4}>
        Its time to do some Basic
      </Typography>

      <FilterTab
        taskState={taskState}
        setTaskState={setTaskState}
        search={search}
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
