import { createContext, useContext, useState } from "react";
import { getUser, signIn, logOut, getUserData } from "../services/usersService";
const context_error = () => {
  throw new Error("must use authContext provider for the consumer to work");
};

export const authContext = createContext({
  user: null,
  login: context_error,
  logout: context_error,
  getMe: context_error,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const refreshUser = () => setUser(getUser());

  const login = async (credentials) => {
    const response = await signIn(credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    logOut();
    refreshUser();
  };

  const getMe = async () => {
    const loggedData = await getUserData();
    return loggedData;
  };

  return (
    <authContext.Provider value={{ user, login, logout, getMe }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
