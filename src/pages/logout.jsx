import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect } from "react";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, []);
}

export default Logout;
