import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Avatar = () => {
  const user = useContext(UserContext);
  return <p>Welcome, {user.name}!</p>;
};
