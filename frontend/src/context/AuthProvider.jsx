import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, SetLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token);
    SetLoading(false);
    console.log(isAuthenticated);
  }, [location]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, isLoading, SetLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
