import { useState } from "react";

export const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>

      <div>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleChange}
        />

        <p>{message}</p>
      </div>
    </div>
  );
};
