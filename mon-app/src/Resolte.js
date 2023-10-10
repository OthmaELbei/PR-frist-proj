import "./App.css";
export default function Resolte({ isVsiible, errorMassge = "null" }) {
  if (isVsiible) {
    return (
      <div className="Style-rsolt">
        <h1
          style={{
            backgroundColor: "white",
            padding: "10px 30px",

            color: errorMassge ? "red" : "green",
          }}
        >
          {errorMassge != null ? errorMassge : "this Value is corect"}
        </h1>
      </div>
    );
  } else {
    return <></>;
  }
}
