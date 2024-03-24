import { useState } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./NavBar";
import WebPageTitle from "./WebPageTitle";

function App() {
  const [formVisibility, setFormVisibility] = useState(false);

  const getFormVisibility = (visibility) => {
    setFormVisibility(visibility);
  };
  const [clearInputs, setClearInputs] = useState(false);

  const getClearForm = () => {
    setClearInputs(true);
  };

  return (
    <div>
      <WebPageTitle />
      <NavBar
        getFormVisibility={getFormVisibility}
        getClearForm={getClearForm}
      />
      <Content formVisibility={formVisibility} clear={clearInputs} />
    </div>
  );
}

export default App;
