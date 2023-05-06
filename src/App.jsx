import "./App.css";
import { useState } from "react";
import Heading from "./Heading";
import Counter from "./Counter";
import ToggleSwitch from "./ToggleSwitch";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name submitted: ${name}`);

    setName("");
  };

  const [message, setMessage] = useState("Click the button!");

  const handleClick = () => setMessage("Button clicked!");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Heading header={"Input Your Name"} />
        <label>
          Name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button>Submit</button>
      </form>

      <Counter />

      <div>
        <button onClick={handleClick}>Click me!</button>
        <p>{message}</p>
      </div>

      <ToggleSwitch />
    </>
  );
}

export default App;
