import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  });

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};
