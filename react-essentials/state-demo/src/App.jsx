import "./App.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { UserDashboard } from "./UserDashboard";
import { SimpleCounter } from "./SimpleCounter";

function App() {
  return (
    <>
      <SimpleCounter />
      <Counter />
      <LoginCard />
      <UserDashboard isPremium={true} />
    </>
  );
}

export default App;
