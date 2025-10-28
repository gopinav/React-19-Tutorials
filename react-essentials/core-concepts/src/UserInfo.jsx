export const UserInfo = ({ name, age, city, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Email: {email}</p>
    </div>
  );
};
