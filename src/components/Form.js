import StepTwo from "./components/StepTwo";

const Form = (props) => {
  const [steptwo, setStepTwo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.firstpassword != props.secondpassword) {
      alert("Vos deux mots de passe ne sont pas identiques");
    }
    if (!props.username) {
      alert("veuillez ajouter un username");
    }
  };
  console.log("user ======>", props.username);
  console.log("email ======>", props.email);
  console.log("first ======>", props.firstpassword);
  console.log("second ======>", props.secondpassword);
  return (
    <div className="myContainer">
      <div className="myFormular">
        <form className="myInputs" onSubmit={handleSubmit}>
          <input
            value={props.username}
            type="text"
            placeholder="username"
            onChange={(event) => {
              props.setUsername(event.target.value);
            }}
          />
          <input
            value={props.email}
            type="email"
            placeholder="email"
            onChange={(event) => {
              props.setEmail(event.target.value);
            }}
          />
          <input
            value={props.firstpassword}
            type="password"
            placeholder="password"
            onChange={(event) => {
              props.setFirstPassword(event.target.value);
            }}
          />
          <input
            value={props.secondpassword}
            type="password"
            placeholder="confirm your password"
            onChange={(event) => {
              props.setSecondPassword(event.target.value);
            }}
          />

          <input
            type="submit"
            value={"Register"}
            onClick={() => {
              setStepTwo(true);
            }}
          />
        </form>
      </div>
    </div>
  );
};
export default Form;
