import { Box, Container } from "@mui/material";
import Priority from "./priority";
import useUser from "../../hooks/getUser";
import CategoryIcon from "./categoryIcon";
import { Link } from "react-router-dom";


function TaskItem({
  taskData: {
    title,
    dateCreated,
    dueDate,
    createdBy,
    assignedTo,
    priority,
    category,
    _id
  },
}) {


  return (
    <Container maxWidth="lg">
      <Link to={`/taskPage/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Box sx={{ maxWidth: "lg", width: "100%" }}>
        <div className="table-data">
          <span className="table-data-title">{title}</span>
          <span className="hide-on-small">Noam</span>
          <span>{assignedTo}</span>
          <span className="hide-on-small">{dateCreated}</span>
          <span className="table-date-due">{dueDate}</span>
          <span className="hide-on-small"><CategoryIcon category={category}/></span>
          <span className="hide-on-small">
            <Priority priority={priority} />
          </span>
        </div>
      </Box>
      </Link>
    </Container>
  );
}

export default TaskItem;
