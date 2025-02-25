import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/auth.context";

function ShopKeerProtectedRoute({ children, onlyShiftLeader = false }) {
  const { user } = useAuth();



  if (!user || (onlyShiftLeader && !user?.shopKeeper)) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ShopKeerProtectedRoute;