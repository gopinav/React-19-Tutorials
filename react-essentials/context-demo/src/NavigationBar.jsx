import { UserMenu } from "./UserMenu";

export const NavigationBar = ({ user }) => {
  return (
    <nav>
      <h3>Navigation</h3>
      <UserMenu user={user} />
    </nav>
  );
};
