import { Box, Container, Typography } from "@mui/material"
import { useAuth } from "../context/auth.context"
import useUser from "../hooks/getUser"
import useAllTasks from "../hooks/getTasks"
import ListItemGrid from "../components/common/taskItemGrid"
import FilterTab from "../components/filterTab"
import TableHeaders from "../components/common/tableHeaders"
import CategoryIcon from "../components/common/categoryIcon"
import { blue, green, orange, red } from "@mui/material/colors"
import Priority from "../components/common/priority"

function Home(){

    const {user} = useAuth()
    const {userInfo} = useUser(user?._id)
    const {allTasks} = useAllTasks()

    const myTasks = allTasks.filter((task) => task.assignedTo.user_id === user._id);

    const tasksByCategory = {
        printing: myTasks.filter((task) => task.category === "Printing").length,
        Assembly: myTasks.filter((task) => task.category === "Assembly").length,
        Recovery: myTasks.filter((task) => task.category === "Recovery").length,
        Cleaning: myTasks.filter((task) => task.category === "Cleaning").length,
    }

    const tasksByPriority = {
        low: myTasks.filter((task) => task.priority === "Low").length,
        medium: myTasks.filter((task) => task.priorty === "Medium").length,
        high: myTasks.filter((task) => task.priority === "High").length,
    }
    return(
        <Container maxWidth="lg">
            <Typography fontSize={56} mt={4} variant="h1">{user ? `Welcome back to Basic ${ userInfo?.name.first} ${userInfo?.name.last}` : "Welcome To Basic"}</Typography>
            <Typography fontSize={36} mt={2} variant="h2">Its time to do some basic. Head over to the tasks page</Typography>

            <Box
  sx={{
    backgroundColor: blue[100],
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 2, // Adds spacing between grid items
    padding: 2, // Adds padding inside the container
    borderRadius: 2, // Optional: Rounds corners for better UI
  }}
>
  <Typography variant="h3" mt={4} gridColumn="span 2">
    Tasks Overview
  </Typography>

  {/* Left Column */}
  <Box sx={{ padding: 2, backgroundColor: red[100], borderRadius: 2 }}>
    <Typography variant="h5">Category Overview</Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <CategoryIcon category="Printing" /> {tasksByCategory.printing}
      <CategoryIcon category="Assembly" /> {tasksByCategory.Assembly}
      <CategoryIcon category="Recovery" /> {tasksByCategory.Recovery}
      <CategoryIcon category="Cleaning" /> {tasksByCategory.Cleaning}
    </Box>
  </Box>

  {/* Right Column */}
  <Box sx={{ padding: 2, backgroundColor: green[100], borderRadius: 2 }}>
    <Typography variant="h5">Tasks Summary</Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    <Priority priority="Low"/>  {tasksByPriority.low}
    <Priority priority="Medium"/>  {tasksByPriority.medium}
    <Priority priority="High"/>   {tasksByPriority.high}
    </Box>
  </Box>
</Box>
        </Container>
    )
}

export default Home