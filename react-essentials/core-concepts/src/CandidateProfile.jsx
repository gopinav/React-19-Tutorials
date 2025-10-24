export const CandidateProfile = () => {
  const name = "Peter Parker";
  const role = "Web Developer";
  const yearsOfExperience = 5;
  const isAvailable = true;

  return (
    <>
      <h1>{name}</h1>
      <p>
        {role} with {yearsOfExperience} years of experience
      </p>
      <p>Started in {2025 - yearsOfExperience}</p>
      <p>Status: {isAvailable ? "Available for hire" : "Not available"}</p>
      <p>Contact: {name.toLowerCase().replace(" ", ".")}@email.com</p>
    </>
  );
};
