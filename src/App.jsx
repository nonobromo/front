import { Box, Container } from "@mui/material";
import SignUp from "./pages/signUp";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn";
import MainPage from "./pages/mainPage";
import NavbarTest from "./components/navbarTest";
import Logout from "./pages/logout";
import About from "./pages/about";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
      }}
    >
      <NavbarTest />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<Logout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  );
};

export default App;
