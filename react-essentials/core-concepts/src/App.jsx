import { Welcome } from "./Welcome";
import Button from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome />
      <Button />
      <Hello />
      <HelloWithoutJSX />
    </div>
  );
}

export default App;
