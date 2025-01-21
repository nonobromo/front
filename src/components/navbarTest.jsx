import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

export default function NavbarTest() {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        flexGrow: 1,
        WebkitFlexGrow: 0,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "green"
      }}
    >
      <AppBar
        position="static"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center">
            <Link to="/" className="navbar-brand">
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Guidify
              </Typography>
            </Link>

            <NavLink to="/">
              <Button color="inherit">Home</Button>
            </NavLink>

            <NavLink to="/About">
              <Button color="inherit">About</Button>
            </NavLink>
            <NavLink to="/createGuide">
              <Button color="inherit">Create Guide</Button>
            </NavLink>
          </Box>

          <Box>
            {user ? (
              <NavLink to="/sign-out">
                <Button color="inherit">Log out</Button>
              </NavLink>
            ) : (
              <>
                <NavLink to="/sign-in">
                  <Button color="inherit">Login</Button>
                </NavLink>
                <NavLink to="/sign-up">
                  <Button color="inherit">Sign Up</Button>
                </NavLink>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
