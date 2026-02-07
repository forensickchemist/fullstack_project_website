import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Loading from "../components/Loading";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return isAuthenticated ? children : <Navigate to="/login" />;
};
