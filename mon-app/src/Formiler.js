import "./App.css";
import { useState } from "react";
import Resolte from "./Resolte";

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
  console.log(formlarperson);
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

      <lapol>Name:</lapol>
      <input
        style={{ width: "100%", padding: "8px", outline: "none" }}
        type="text"
        value={formlarperson.Name}
        onChange={(event) => {
          SetFormlarperson({ ...formlarperson, Name: event.target.value });
        }}
      ></input>

      <lapol>Namber:</lapol>
      <input
        style={{ width: "100%", padding: "8px", outline: "none" }}
        type="number"
        value={formlarperson.Namber}
        onChange={(event) => {
          SetFormlarperson({ ...formlarperson, Namber: event.target.value });
        }}
      ></input>

      <lapol>Age:</lapol>
      <input
        style={{ width: "100%", padding: "8px", outline: "none" }}
        type="number"
        value={formlarperson.Age}
        onChange={(event) => {
          SetFormlarperson({ ...formlarperson, Age: event.target.value });
        }}
      ></input>
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
