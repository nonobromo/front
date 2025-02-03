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

  let displayedTasks = [];

  if (taskState === "My Tasks") {
    displayedTasks = allTasks.filter(
      (task) =>
        task.assignedTo === `${userInfo?.name?.first} ${userInfo?.name?.last}`
    );
  } else if (taskState === "Unassigned Tasks") {
    displayedTasks = allTasks.filter((task) => !task.assignedTo);
  } else {
    displayedTasks = allTasks;
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: 8,
      }}
    >
      <Typography fontSize="4rem" variant="h1" mt={4}>
        Its time to do some Basic
      </Typography>

      <FilterTab taskState={taskState} setTaskState={setTaskState} />

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
