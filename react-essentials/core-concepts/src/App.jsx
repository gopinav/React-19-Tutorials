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
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { Alert } from "./Alert";
import { NewButton } from "./NewButton";
import { CustomButton } from "./CustomButton";
import { Contact } from "./Contact";
import { Newsletter } from "./Newsletter";
import { Menu } from "./Menu";
import { TodoList } from "./ToDoList";
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
      <UserDetails
        name="Bruce Wayne"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role="moderator"
      />
      <UserDetails
        name="Clark Kent"
        isOnline={false}
        hideOffline={false}
        role="vip"
      />
      <ProductList />
      <Alert>Your changes have been saved!</Alert>
      <Alert type="error">Something went wrong!</Alert>
      <NewButton />
      <CustomButton />
      <Contact />
      <Newsletter />
      <Menu />
      <TodoList />
    </div>
  );
}

export default App;
