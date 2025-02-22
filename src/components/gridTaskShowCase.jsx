import { Container, Typography } from "@mui/material";
import ListItemGrid from "./common/taskItemGrid";
import { useAuth } from "../context/auth.context";

function GridTaskShowCase({ displayedTasks }) {
  const { user } = useAuth();

  return (
    <Container
      className="grid-align "
      maxWidth={false}
      sx={{
        maxWidth: "1400px",
        marginTop: "24px",
      }}
    >
      {user && displayedTasks.length > 0
        ? displayedTasks.map((taskData) => {
            return <ListItemGrid taskData={taskData} key={taskData._id} />;
          })
        : "No Tasks to show"}
    </Container>
  );
}

export default GridTaskShowCase;
