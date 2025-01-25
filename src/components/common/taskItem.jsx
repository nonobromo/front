import { Box, Container } from "@mui/material";
import Priority from "./priority";

function TaskItem({
  taskData: {
    title,
    dateCreated,
    dueDate,
    createdBy,
    assignedTo,
    priority,
    category,
  },
}) {
  console.log(title.length);

  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "lg", width: "100%" }}>
        <div className="table-data">
          <span className="table-data-title">{title}</span>
          <span className="hide-on-small">Noam</span>
          <span></span>
          <span className="hide-on-small">{dateCreated}</span>
          <span className="table-date-due">{dueDate}</span>
          <span className="hide-on-small">{category}</span>
          <span className="hide-on-small">
            <Priority priority={priority} />
          </span>
        </div>
      </Box>
    </Container>
  );
}

export default TaskItem;
