import "./App.css";
import { useState } from "react";
import Resolte from "./Resolte";
import Myinput from "./Myinput";

export default function Formiler() {
  const [errorMassage, setEerrorMassage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formlarperson, SetFormlarperson] = useState({
    Name: "",
    Age: "",
    Namber: "",
    chicked: false,
    slary: "",
  });

  function handerformSunmit(event) {
    event.preventDefault();
    const { Age, Namber } = formlarperson;
    setEerrorMassage(null);
    if (Age < 18 || Age > 100) {
      setEerrorMassage("the age is not alute");
    } else if (Namber.length < 10 || Namber.length > 12) {
      setEerrorMassage("the Namber is not coreacte");
    }
    setShowModal(true);
  }

  function handelclik() {
    if (showModal) {
      setShowModal(false);
    }
  }
  function forInputNameCompont(value) {
    SetFormlarperson({ ...formlarperson, Namber: value });
  }
  function forInputAgeCompont(value) {
    SetFormlarperson({ ...formlarperson, Age: value });
  }
  function forInputNameCompont(value) {
    SetFormlarperson({ ...formlarperson, Name: value });
  }
  return (
    <div onClick={handelclik} className="child-Paront Form-name">
      <h1
        style={{
          color: "white",
          display: " flex",
          justifyContent: "center",
          alignItems: "center ",
        }}
      >
        Requesting aLoan
      </h1>

      <hr></hr>

      <Myinput
        inputValue="Name:"
        value={formlarperson.Name}
        mySetNameINput={forInputNameCompont}
      />

      <Myinput
        inputValue="Nambers:"
        value={formlarperson.Namber}
        mySetNameINput={forInputNameCompont}
      />

      <Myinput
        inputValue="Age:"
        value={formlarperson.Age}
        mySetNameINput={forInputAgeCompont}
      />

      <lapol>Are you an employee:</lapol>
      <input
        style={{ width: "30px", height: "30px" }}
        type="checkbox"
        checked={formlarperson.chicked}
        onChange={(event) => {
          SetFormlarperson({ ...formlarperson, chicked: event.target.checked });
        }}
      ></input>

      <lapol>slary:</lapol>
      <select
        style={{ width: "100%", padding: "8px", outline: "none" }}
        value={formlarperson.slary}
        onChange={(event) => {
          SetFormlarperson({ ...formlarperson, slary: event.target.value });
        }}
      >
        <option>500£ for jenur</option>
        <option>1000£ for senuer</option>
        <option>1500$ for Anjenuer</option>
      </select>

      <button
        style={{
          margin: "10px",
          backgroundColor: "pink",
          padding: "15px",
          outline: "none",
          borderRadius: "10px",
        }}
        onClick={handerformSunmit}
        disabled={
          formlarperson.Name == "" ||
          formlarperson.Age == "" ||
          formlarperson.Namber == ""
        }
      >
        sapmet
      </button>

      <Resolte errorMassge={errorMassage} isVsiible={showModal} />
    </div>
  );
}
