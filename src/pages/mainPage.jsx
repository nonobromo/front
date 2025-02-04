import { Box, Container, Typography } from "@mui/material";
import FilterTab from "../components/filterTab";
import TableHeaders from "../components/common/tableHeaders";
import TaskItem from "../components/common/taskItem";
import useAllTasks from "../hooks/getTasks";
import useUser from "../hooks/getUser";
import { useAuth } from "../context/auth.context";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MainPage() {
  const { allTasks } = useAllTasks();
  const { user } = useAuth();
  const { userInfo } = useUser(user?._id);
  const [taskState, setTaskState] = useState("All Tasks");
  const [search, setSearch] = useState("")

  let displayedTasks = [];

  

  if (taskState === "My Tasks") {
    displayedTasks = allTasks.filter(
      (task) =>
        task.assignedTo.user_id === user._id
    );
  } else if (taskState === "Unassigned Tasks") {
    displayedTasks = allTasks;
  } else {
    displayedTasks = allTasks;
  }

  displayedTasks = search ? displayedTasks.filter((task) => task.title.toLowerCase().includes(search.toLocaleLowerCase())) : displayedTasks 


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

      <FilterTab taskState={taskState} setTaskState={setTaskState} search={search} setSearch={setSearch} />

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TableHeaders />
      </Box>

      {user && displayedTasks.length > 0
        ? displayedTasks.map((task) => (
            <TaskItem taskData={task} key={task._id} />
          ))
        : "No Tasks to show"}

      {/* <NavLink to="/pageExample">go to example</NavLink> */}
    </Container>
  );
}

export default MainPage;
