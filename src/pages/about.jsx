import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Logo from "../components/common/logo";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ display: "flex", gap: 2 }}>
        About <Logo />
      </Typography>
      <Typography variant="body1">
        <strong>Basic</strong> is a task management app built to improve daily
        operations in retail and warehouse environments. It helps Shift Leaders
        and Shopkeepers efficiently assign, track, and complete tasks, ensuring
        smoother workflows and better team coordination.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom>
        Key Features
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon />
          </ListItemIcon>
          <ListItemText
            primary="Task Management"
            secondary="Create, assign, and track tasks with priority levels: Low, Medium, and High."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText
            primary="Task Categories"
            secondary="Organize tasks into categories like Recovery, Cleaning, Printing, and Assembly."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Remarks & Collaboration"
            secondary="Team members can leave comments on tasks to improve communication."
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom>
        User Roles
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Co-Worker"
            secondary="Views assigned tasks and can assign tasks to themselves, allowing them to take initiative."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Shift Leader"
            secondary="Creates and assigns tasks to themselves or other team members."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Shopkeeper"
            secondary="Oversees task management, modifies Shift Leader status, and manages users."
          />
        </ListItem>
      </List>

      <Typography variant="body2" sx={{ mt: 3 }}>
        <strong>Basic</strong> is designed to keep teams organized and tasks on
        track—making daily operations smoother and more efficient. 🚀
      </Typography>
    </Container>
  );
}
