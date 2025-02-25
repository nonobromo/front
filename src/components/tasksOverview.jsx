import { Box, Typography } from "@mui/material";
import CategoryIcon from "./common/categoryIcon";
import Priority from "./common/priority";
import useAllTasks from "../hooks/getTasks";
import { blue, green, red } from "@mui/material/colors";

function TasksOverview(){

    const { allTasks } = useAllTasks();

    const tasksByCategory = {
        printing: allTasks.filter((task) => task.category === "Printing").length,
        Assembly: allTasks.filter((task) => task.category === "Assembly").length,
        Recovery: allTasks.filter((task) => task.category === "Recovery").length,
        Cleaning: allTasks.filter((task) => task.category === "Cleaning").length,
      };
    
      const tasksByPriority = {
        low: allTasks.filter((task) => task.priority === "Low").length,
        medium: allTasks.filter((task) => task.priority === "Medium").length,
        high: allTasks.filter((task) => task.priority === "High").length,
      };

    return (
        <Box
        sx={{
          backgroundColor: blue[100],
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          padding: 2,
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        <Typography variant="h2" mt={4} gridColumn="span 2">
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

        <Box sx={{ padding: 2, backgroundColor: green[100], borderRadius: 2 }}>
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
    )
}

export default TasksOverview