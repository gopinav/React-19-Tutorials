export const CustomButton = () => {
  const handleClick = () => {
    alert("Thanks for liking!");
  };
  return <button onClick={handleClick}>Like</button>;
};
