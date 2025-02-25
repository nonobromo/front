import { Navigate } from "react-router-dom";


import { useAuth } from "../../context/auth.context";

function ShiftLeaderProtectedRoute({ children, onlyShiftLeader = false }) {
  const { user } = useAuth();

  if (!user || (onlyShiftLeader && !user?.shiftLeader)) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ShiftLeaderProtectedRoute;