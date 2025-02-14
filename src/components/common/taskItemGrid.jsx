import { Box } from "@mui/material";
import { green, blue, red, orange, purple, grey } from "@mui/material/colors";
import CategoryIcon from "./categoryIcon";
import Priority from "./priority";

function ListItemGrid({ 
  taskData: { title, dateCreated, dueDate, createdBy, assignedTo, priority, category } 
}) {

  let reversedCreatedDate = [dateCreated][0].split("/");
  const day = reversedCreatedDate[1].padStart(2, "0");
  const month = reversedCreatedDate[0].padStart(2, "0");
  const year = reversedCreatedDate[2];

  const formattedCreatedDate = `${day}/${month}/${year}`;
  const reversedDueDate = [dueDate][0].split("-").reverse().join("/");

  return (
    <Box sx={{ 
      display: "grid",
      gridTemplateColumns: "repeat, (2 ,100px)",
      gap: 1, // Reduce gap between boxes
      backgroundColor: grey[300], 
      padding: 1, // Reduce outer padding
      borderRadius: 1 
    }}>
      
      {/* Title - Full Row */}
      <Box sx={{ 
        backgroundColor: blue[100], 
        padding: "4px", // Reduce padding inside the box
        fontSize: "0.85rem", // Reduce text size
        borderRadius: 1, 
        gridColumn: "span 2" 
      }}>
        <strong>Title:</strong> {title}
      </Box>

      {/* Created By & Assigned To */}
      <Box sx={{ backgroundColor: green[100], padding: "4px", fontSize: "0.8rem", borderRadius: 1 }}>
        <strong>Created By:</strong> {createdBy.name}
      </Box>
      <Box sx={{ backgroundColor: red[100], padding: "4px", fontSize: "0.8rem", borderRadius: 1 }}>
        <strong>Assigned To:</strong> {assignedTo.name}
      </Box>

      {/* Date Created & Priority (Same Row) */}
      <Box sx={{ backgroundColor: orange[100], padding: "4px", fontSize: "0.8rem", borderRadius: 1 }}>
        <strong>Date Created:</strong> {formattedCreatedDate}
      </Box>
      <Box sx={{ backgroundColor: red[200], padding: "4px", fontSize: "0.8rem", borderRadius: 1 }}>
        <strong>Priority:</strong> <Priority priority={priority}/>
      </Box>

      {/* Due Date - Always in the next row */}
      <Box sx={{ backgroundColor: purple[100], padding: "4px", fontSize: "0.8rem", borderRadius: 1, gridColumn: "span 2" }}>
        <strong>Due Date:</strong> {reversedDueDate}
      </Box>

      {/* Category & Icon - Full Row */}
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "4px", // Reduce space between elements
        backgroundColor: blue[200], 
        padding: "4px", 
        fontSize: "0.8rem", 
        borderRadius: 1, 
        gridColumn: "span 2" 
      }}>
        <strong>Category:</strong> <CategoryIcon category={category} />
      </Box>
      
    </Box>
  );
}

export default ListItemGrid;
