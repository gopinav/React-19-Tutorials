import "./App.css";

function Welcome() {
  return <h2>Welcome, Vishwas!</h2>;
}

function Button() {
  return <button>Click me</button>;
}

function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
