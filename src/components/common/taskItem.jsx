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
    _id,
  },
}) {
  let reversedCreatedDate = [dateCreated][0].split("/");
  const day = reversedCreatedDate[1].padStart(2, "0");
  const month = reversedCreatedDate[0].padStart(2, "0");
  const year = reversedCreatedDate[2];

  const formattedCreatedDate = `${day}/${month}/${year}`;
  const reversedDueDate = [dueDate][0].split("-").reverse().join("/");
  const { userInfo } = useUser(createdBy);

  return (
    <Container maxWidth="lg">
      <Link
        to={`/taskPage/${_id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        state={{ id: _id }}
      >
        <Box sx={{ maxWidth: "lg", width: "100%" }}>
          <div className="table-data">
            <span className="table-data-title">{title}</span>
            <span className="hide-on-small">{userInfo?.name?.first}</span>
            <span>{assignedTo}</span>
            <span className="hide-on-small">{formattedCreatedDate}</span>
            <span className="table-date-due">{reversedDueDate}</span>
            <span className="hide-on-small">
              <CategoryIcon category={category} />
            </span>
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
