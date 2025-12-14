import "./App.css";
import { Header } from "./Header";
import { UserContext } from "./UserContext";

function App() {
  const user = {
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Dashboard</h1>
        <Header user={user} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
