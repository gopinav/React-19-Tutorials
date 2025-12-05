import "./App.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { UserDashboard } from "./UserDashboard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { BatchingCounter } from "./BatchingCounter";
import { UserProfile } from "./UserProfile";
import { TodoList } from "./TodoList";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";
import { CounterWithInit } from "./CounterWithInit";
import { CustomCounter } from "./CustomCounter";

function App() {
  return (
    <>
      <TodoList />
      <UserProfile />
      <BatchingCounter />
      <PrevStateCounter />
      <SimpleCounter />
      <Counter />
      <LoginCard />
      <UserDashboard isPremium={true} />

      <CounterWithReducer />
      <ShoppingCartWithReducer />
      <CounterWithInit />
      <CustomCounter />
    </>
  );
}

export default App;
