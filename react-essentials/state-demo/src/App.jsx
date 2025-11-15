import "./App.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { UserDashboard } from "./UserDashboard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { BatchingCounter } from "./BatchingCounter";
import { UserProfile } from "./UserProfile";

function App() {
  return (
    <>
      <UserProfile />
      <BatchingCounter />
      <PrevStateCounter />
      <SimpleCounter />
      <Counter />
      <LoginCard />
      <UserDashboard isPremium={true} />
    </>
  );
}

export default App;
