export default function Myinput({ value, mySetNameINput, inputValue }) {
  return (
    <>
      <lapol>{inputValue}</lapol>
      <input
        style={{ width: "100%", padding: "8px", outline: "none" }}
        type="number"
        value={value}
        onChange={(event) => {
          mySetNameINput(event.target.value);
        }}
      ></input>
    </>
  );
}
