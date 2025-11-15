import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    age: 30,
    email: "batman@justiceleague.com",
    address: {
      city: "Gotham City",
      country: "USA",
    },
  });

  console.log("Component rendering, user:", user);

  const updateName = () => {
    setUser({
      ...user, // Copy all existing properties
      name: "Clark Kent", // Override just the name
    });
  };

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  const updateMultiple = () => {
    setUser({
      ...user,
      name: "Clark Kent",
      age: 31,
    });
  };

  const updateCity = () => {
    setUser({
      ...user,
      address: {
        ...user.address, // Spread the nested object
        city: "Metropolis",
      },
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <button onClick={updateName}>Change name to Clark Kent</button>
      <button onClick={updateAge}>Increase age by 1</button>
      <button onClick={updateMultiple}>Update name and age</button>
      <button onClick={updateCity}>Move to Metropolis</button>
    </div>
  );
};
