import { createContext } from "react";

export const UserContext = createContext({
  name: "Guest",
  role: "visitor",
  theme: "light",
});
