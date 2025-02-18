import { Box, Container, List, ListItem, Typography } from "@mui/material";
import useAllTasks from "../hooks/getTasks";
import Priority from "../components/common/priority";
import CategoryIcon from "../components/common/categoryIcon";
import { blue, green, orange, red } from "@mui/material/colors";
import useAllUser from "../hooks/getAllUsers";
import { useEffect, useState } from "react";

function SkPage() {
  const { allTasks } = useAllTasks();
  const { allUsersByName } = useAllUser();

  const [taskReport, setTaskReport] = useState({});

  useEffect(() => {
    const generateReport = () => {
      return allUsersByName.reduce((acc, user) => {
        const userTasks = allTasks.filter(
          (task) => task.assignedTo?.user_id === user.id
        );
        acc[user.fullName] = {
          total: userTasks.length,
          printing: userTasks.filter((task) => task.category === "Printing")
            .length,
          assembly: userTasks.filter((task) => task.category === "Assembly")
            .length,
          recovery: userTasks.filter((task) => task.category === "Recovery")
            .length,
          cleaning: userTasks.filter((task) => task.category === "Cleaning")
            .length,
        };
        return acc;
      }, {});
    };

    setTaskReport(generateReport());
  }, [allUsersByName, allTasks]);

  const tasksByCategory = {
    printing: allTasks.filter((task) => task.category === "Printing").length,
    Assembly: allTasks.filter((task) => task.category === "Assembly").length,
    Recovery: allTasks.filter((task) => task.category === "Recovery").length,
    Cleaning: allTasks.filter((task) => task.category === "Cleaning").length,
  };

  const tasksByPriority = {
    low: allTasks.filter((task) => task.priority === "Low").length,
    medium: allTasks.filter((task) => task.priorty === "Medium").length,
    high: allTasks.filter((task) => task.priority === "High").length,
  };

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px", marginBottom: 3 }}>
      <Typography fontSize={48} mt={4} variant="h1">
        Shop Keeper Dashboard
      </Typography>

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
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: orange[100],
          maxWidth: "1400px",
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        <Typography variant="h2">Tasks per user</Typography>
        <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
          <div className="report-table-headers">
            <span>User</span>
            <span>Total Tasks</span>
            <span>
              <CategoryIcon category="Printing" />
            </span>
            <span>
              <CategoryIcon category="Assembly" />
            </span>
            <span>
              <CategoryIcon category="Cleaning" />
            </span>
            <span>
              <CategoryIcon category="Recovery" />
            </span>
          </div>

          {Object.entries(taskReport).map(([userName, report]) => (
            <div key={userName} className="report-table-headers user-report-m">
              <span>{userName}</span>
              <span>{report.total}</span>
              <span>{report.printing}</span>
              <span>{report.assembly}</span>
              <span>{report.cleaning}</span>
              <span>{report.recovery}</span>
            </div>
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export default SkPage;

// {Object.entries(taskReport).map(([userName, tasks]) => (
//   <div key={userName}>
//     <h2>{userName}</h2>
//     <ul>
//       {tasks.length > 0 ? (
//         tasks.map(task => <li key={task.id}>{userName} has {tasks.length} tasks</li>)
//       ) : (
//         <li>No tasks assigned</li>
//       )}
//     </ul>
//   </div>
// ))}
