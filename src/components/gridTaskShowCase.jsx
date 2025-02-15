import { Container, Typography } from "@mui/material";
import ListItemGrid from "./common/taskItemGrid";

function GridTaskShowCase({ displayedTasks }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1400px",
        marginTop: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      {displayedTasks.map((taskData) => {
        return <ListItemGrid taskData={taskData} />;
      })}
    </Container>
  );
}

export default GridTaskShowCase;
