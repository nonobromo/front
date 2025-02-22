import { Box, Container, Typography } from "@mui/material";
import { useAuth } from "../context/auth.context";
import useUser from "../hooks/getUser";
import useAllTasks from "../hooks/getTasks";
import CategoryIcon from "../components/common/categoryIcon";
import { blue, green, red } from "@mui/material/colors";
import Priority from "../components/common/priority";

function Home() {
  const { user } = useAuth();
  const { userInfo } = useUser(user?._id);
  const { allTasks } = useAllTasks();

  const myTasks = allTasks.filter(
    (task) => task.assignedTo.user_id === user._id
  );

  const fullName = `${userInfo?.name?.first} ${userInfo?.name?.last}`;

  const tasksByCategory = {
    printing: myTasks.filter((task) => task.category === "Printing").length,
    Assembly: myTasks.filter((task) => task.category === "Assembly").length,
    Recovery: myTasks.filter((task) => task.category === "Recovery").length,
    Cleaning: myTasks.filter((task) => task.category === "Cleaning").length,
  };

  const tasksByPriority = {
    low: myTasks.filter((task) => task.priority === "Low").length,
    medium: myTasks.filter((task) => task.priorty === "Medium").length,
    high: myTasks.filter((task) => task.priority === "High").length,
  };
  return (
    <Container maxWidth="lg">
      <Typography fontSize={56} mt={4} variant="h1">
        {user
          ? `Welcome back to Basic ${user && fullName}`
          : "Welcome To Basic"}
      </Typography>
      <Typography fontSize={36} mt={2} variant="h2">
        Its time to do some basic.{" "}
        {user ? "Head over to the tasks page" : "Login to see your tasks"}
      </Typography>

      {user && (
        <Box
          sx={{
            backgroundColor: blue[100],
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h3" mt={4} gridColumn="span 2">
            Tasks Overview
          </Typography>

          <Box sx={{ padding: 2, backgroundColor: red[100], borderRadius: 2 }}>
            <Typography marginBottom={2} variant="h5">
              Category Overview
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <CategoryIcon category="Printing" /> {tasksByCategory.printing}
              <CategoryIcon category="Assembly" /> {tasksByCategory.Assembly}
              <CategoryIcon category="Recovery" /> {tasksByCategory.Recovery}
              <CategoryIcon category="Cleaning" /> {tasksByCategory.Cleaning}
            </Box>
          </Box>

          <Box
            sx={{ padding: 2, backgroundColor: green[100], borderRadius: 2 }}
          >
            <Typography marginBottom={2} variant="h5">
              Priority Overview
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Priority priority="Low" /> {tasksByPriority.low}
              <Priority priority="Medium" /> {tasksByPriority.medium}
              <Priority priority="High" /> {tasksByPriority.high}
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default Home;
