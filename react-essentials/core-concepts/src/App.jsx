import { Welcome } from "./Welcome";
import Button from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";
import { CandidateProfile } from "./CandidateProfile";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome />
      <Button />
      <Hello />
      <HelloWithoutJSX />
      <UserProfile />
      <ContactForm />
      <StyledForm />
      <CandidateProfile />
    </div>
  );
}

export default App;
