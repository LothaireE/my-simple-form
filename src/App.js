import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstpassword, setFirstPassword] = useState("");
  const [secondpassword, setSecondPassword] = useState("");
  // console.log(username);
  // console.log(email);
  // console.log(firstpassword);
  // console.log();

  // alert("local");

  return (
    <div>
      <Form
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        firstpassword={firstpassword}
        setFirstPassword={setFirstPassword}
        secondpassword={secondpassword}
        setSecondPassword={setSecondPassword}
      />

      <StepTwo />
      <Footer />
    </div>
  );
}

export default App;
