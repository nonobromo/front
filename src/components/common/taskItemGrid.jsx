import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import CategoryIcon from "./categoryIcon";
import Priority from "./priority";
import { Link } from "react-router-dom";

function ListItemGrid({ taskData }) {
  if (!taskData) return null; // Prevents errors if taskData is undefined

  const {
    title,
    dateCreated,
    dueDate,
    createdBy,
    assignedTo,
    priority,
    category,
    _id,
  } = taskData;

  const createdDateParts = dateCreated?.split("/") || [];
  const formattedCreatedDate =
    createdDateParts.length === 3
      ? `${createdDateParts[1].padStart(2, "0")}/${createdDateParts[0].padStart(
          2,
          "0"
        )}/${createdDateParts[2]}`
      : dateCreated;

  const formattedDueDate = dueDate?.split("-").reverse().join("/") || dueDate;

  return (
    <Link
      to={`/taskPage/${_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      state={{ id: _id }}
    >
      <Box
        sx={{
          backgroundColor: blue[100],
          padding: 2,
          borderRadius: 2,
          boxShadow: 1,
          display: "grid",
          gap: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created: {formattedCreatedDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Due: {formattedDueDate}
        </Typography>
        <Typography variant="body2">
          Created by: {createdBy?.name || "N/A"}
        </Typography>
        <Typography variant="body2">
          Assigned to: {assignedTo?.name || ""}
        </Typography>
        <Priority priority={priority} />
        <CategoryIcon category={category} />
      </Box>
    </Link>
  );
}

export default ListItemGrid;
