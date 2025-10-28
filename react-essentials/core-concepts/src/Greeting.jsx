export const Greeting = ({ name = "Guest", message = "Hello" }) => {
  return (
    <h2>
      {message}, {name}!
    </h2>
  );
};
