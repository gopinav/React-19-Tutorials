import { NavigationBar } from "./NavigationBar";

export const Header = ({ user }) => {
  return (
    <header>
      <h2>Header</h2>
      <NavigationBar user={user} />
    </header>
  );
};
