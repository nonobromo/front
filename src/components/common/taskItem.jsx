import { Box, Container } from "@mui/material";
import Priority from "./priority";
import useUser from "../../hooks/getUser";

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
  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "lg", width: "100%" }}>
        <div className="table-data">
          <span className="table-data-title">{title}</span>
          <span className="hide-on-small">Noam</span>
          <span>{assignedTo}</span>
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
