import { useContext, use } from "react";
import { UserContext } from "./UserContext";

export const Avatar = () => {
  const { user, setUser } = useContext(UserContext);
  const { user: user2 } = use(UserContext);
  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Current theme: {user2.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
