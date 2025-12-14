import { Avatar } from "./Avatar";

export const UserMenu = ({ user }) => {
  return (
    <div>
      <h4>User Menu</h4>
      <Avatar user={user} />
    </div>
  );
};
