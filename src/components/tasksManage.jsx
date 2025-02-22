import { Container, Typography } from "@mui/material";
import TableHeaders from "./common/tableHeaders";
import useAllTasks from "../hooks/getTasks";
import TaskItem from "./common/taskItem";

function TasksManage() {
  const { allTasks } = useAllTasks();

  const unCompletedTasks = allTasks.filter((task) => task.complete === false);

  const completedTasks = allTasks.filter((task) => task.complete === true);

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Typography variant="h4" sx={{ margin: "36px 0 36px 0" }}>
        Uncompleted Tasks
      </Typography>

      <TableHeaders />
      {unCompletedTasks.length > 0
        ? unCompletedTasks.map((task) => (
            <TaskItem taskData={task} key={task._id} />
          ))
        : "No Tasks to show"}

      <Typography variant="h4" sx={{ margin: "36px 0 36px 0" }}>
        Completed Tasks
      </Typography>

      <TableHeaders />
      {completedTasks.length > 0
        ? completedTasks.map((task) => (
            <TaskItem taskData={task} key={task._id} />
          ))
        : "No tasks to show"}
    </Container>
  );
}

export default TasksManage;
