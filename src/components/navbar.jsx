import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <Link to="/" className="navbar-brand">
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Guidify
            </Typography>
          </Link>

          <Box sx={{ display: "flex", gap: 2 }}>
            <NavLink to="/sign-in">
              <Button color="inherit" sx={{ maxWidth: "120px" }}>
                Sign In
              </Button>
            </NavLink>
            <NavLink to="/sign-up" className="nav-link">
              <Button color="inherit" sx={{ maxWidth: "120px" }}>
                Sign Up
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
