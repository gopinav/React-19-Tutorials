import "./App.css";
import { Header } from "./Header";

function App() {
  const user = {
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Header user={user} />
    </div>
  );
}

export default App;
