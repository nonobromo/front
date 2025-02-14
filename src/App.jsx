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
import GuidePage from "./components/common/guidePage";
import CreateNewGuide from "./pages/uploadGuide";
import UserPageInfo from "./pages/userPage";
import TaskPage from "./components/common/taskPage";
import TaskPageTest from "./components/common/taskPageTest";
import Footer from "./components/footer";
import SkPage from "./pages/skPage";
import Home from "./pages/home";

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
        <Route path="/" element={<Home/>}/>
        <Route path="/tasks" element={<MainPage />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/createGuide" element={<CreateNewGuide/>}/>
        <Route path="/userInfo/" element={<UserPageInfo/>}/>
        <Route path="/taskPage/:id" element={<TaskPageTest/>}/>
        <Route path="/sk-page" element={<SkPage/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
};

export default App;
