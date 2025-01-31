import { useState } from "react";
import {
  Box,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Priority from "./priority";
import CategoryIcon from "./categoryIcon";
import useAllUser from "../../hooks/getAllUsers";

function TaskPage() {
  const { allUsersByName } = useAllUser();
  const [assignedUser, setAssignedUser] = useState(""); 

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 4, gap: 3 }}>
        <Priority priority="Low" />
        <CategoryIcon category="Cleaning" />
      </Box>
      <Typography variant="h2">Lorem Ipsum</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, pariatur consequatur! Consequatur molestiae architecto optio recusandae voluptatem repellat magni impedit, eum ut eos natus consequuntur doloribus aspernatur nostrum vitae atque quibusdam alias, distinctio accusantium quo et adipisci? Natus, aperiam nemo!
      </Typography>

      <Box sx={{ flex: 1 }}>
        <InputLabel>Assign to</InputLabel>
        <Select
          fullWidth
          displayEmpty
          value={assignedUser} 
          onChange={(e) => setAssignedUser(e.target.value)} 
        >
          <MenuItem disabled value="">
            Select an employee
          </MenuItem>
          {allUsersByName.map((user) => (
            <MenuItem value={user.fullName} key={user.id}>
              {user.fullName}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Container>
  );
}

export default TaskPage;
