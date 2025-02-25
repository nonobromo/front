import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import useUser from "../hooks/getUser";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { Checklist } from "@mui/icons-material";

export default function NavbarTest() {
  const { user } = useAuth();
  const { userInfo } = useUser(user?._id);
  const [pictureMenu, openPictureMenu] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const handleOpen = () => {
    openPictureMenu((perv) => !perv);
  };

  const openHamburgerMenu = () => {
    setHamburger((perv) => !perv);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        WebkitFlexGrow: 0,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "green",
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
            <div
              className={`hamburger ${hamburger ? "active" : ""}`}
              onClick={openHamburgerMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <Link to="/" className="navbar-brand">
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  marginLeft: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Basic <Checklist fontSize="35px" />
              </Typography>
            </Link>
            <div className={`navbar-content ${hamburger ? "active" : ""}`}>
              {user && (
                <NavLink to="/tasks">
                  <Button color="inherit">Tasks</Button>
                </NavLink>
              )}

              <NavLink to="/About">
                <Button color="inherit">About</Button>
              </NavLink>
              {user && userInfo?.shiftLeader && (
                <NavLink to="/createTask">
                  <Button color="inherit">Create Task</Button>
                </NavLink>
              )}

              {user && userInfo?.shopKeeper && (
                <NavLink to="sk-page">
                  <Button color="inherit">SK-Area</Button>
                </NavLink>
              )}
            </div>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {user ? (
              <div onMouseEnter={handleOpen} onMouseLeave={handleOpen}>
                <Avatar
                  alt="User Name"
                  src={userInfo?.picture}
                  sx={{ width: 50, height: 50, objectFit: "cover" }}
                />
                <ul className={`picture-menu ${pictureMenu ? "open" : ""}`}>
                  <li>
                    <NavLink to="/sign-out" className="picture-menu-li">
                      Log Out
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/userInfo" className="picture-menu-li">
                      My Info
                    </NavLink>
                  </li>
                </ul>
              </div>
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
