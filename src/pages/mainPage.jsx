import { Box, Container, Typography } from "@mui/material";
import FilterTab from "../components/filterTab";
import TableHeaders from "../components/common/tableHeaders";
import TaskItem from "../components/common/taskItem";
import useAllTasks from "../hooks/getTasks";
import useUser from "../hooks/getUser";
import { useAuth } from "../context/auth.context";

function MainPage() {
  const { allTasks } = useAllTasks();
  const { user } = useAuth();
  const { userInfo } = useUser(user?._id);
  //I need to fix  the tasks table and move everything from the title after to the right
  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
    >
      <Typography fontSize="4rem" variant="h1" mt={4}>
        Its time to do some Basic
      </Typography>

      <FilterTab />

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TableHeaders />
      </Box>

      {allTasks.length <= 0
        ? "No Tasks to show"
        : allTasks.map((task) => {
            return <TaskItem taskData={task} key={task._id} />;
          })}
    </Container>
  );
}

export default MainPage;
