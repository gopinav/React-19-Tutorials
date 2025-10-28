export const UserCard = ({ id, ...rest }) => {
  return (
    <div>
      <h2>User {id} Details</h2>
      <UserInfo {...rest} />
    </div>
  );
};
