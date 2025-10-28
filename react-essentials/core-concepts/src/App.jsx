import { Welcome } from "./Welcome";
import Button from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />
      <Button />
      <Hello />
      <HelloWithoutJSX />
      <UserProfile />
      <ContactForm />
      <StyledForm />
      <CandidateProfile />
      <Product
        title="Gaming Laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <Greeting name="Bruce" message="Good morning" />
      <Greeting name="Clark" />
      <Greeting message="Welcome" />
      <Greeting />
      <CardWrapper title="User Profile">
        <p>John Doe</p>
        <p>john@example.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
    </div>
  );
}

export default App;
