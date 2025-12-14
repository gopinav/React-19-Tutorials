import "./App.css";
import { Header } from "./Header";
import { UserContextProvider } from "./UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>Dashboard</h1>
        <Header />
      </div>
    </UserContextProvider>
  );
}

export default App;
