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
import InsightsIcon from "@mui/icons-material/Insights";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Basic
      </Typography>
      <Typography variant="body1">
        <strong>Basic</strong> is IKEA's custom-built CRM app designed to
        enhance task management and coordination across the{" "}
        <strong>Showroom (Upper Floor)</strong> and{" "}
        <strong>Markethall (Lower Floor)</strong>. It enables{" "}
        <strong>Shift Leaders</strong> and <strong>Shopkeepers</strong> to
        efficiently assign and track tasks, ensuring seamless operations and
        improved teamwork.
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
            secondary="Create, assign, and complete tasks with priority levels: Low, Medium, and High."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText
            primary="Task Categories"
            secondary="Tasks include Assembling Furniture, Cleaning, Printing, and Recovery Transport."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Remarks Section"
            secondary="Users can add and edit comments on tasks for better collaboration."
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
            secondary="Views assigned tasks and can assign tasks to themselves. This helps track how often co-workers see available tasks and if they take the initiative to complete them."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Shift Leader"
            secondary="Creates and assigns tasks to themselves or others."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Shopkeeper"
            secondary="Has access to the Shopkeeper Dashboard, where they can mark tasks as uncompleted, modify Shift Leader status, and delete users."
          />
        </ListItem>
      </List>

      <Typography variant="body2" sx={{ mt: 3 }}>
        With <strong>Basic</strong>, managing daily tasks at IKEA has never been
        easier, keeping teams aligned and operations running smoothly. 🚀
      </Typography>
    </Container>
  );
}
