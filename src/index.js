import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(render);
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button
        onClick={() => {
          alert(`El mensaje es: ${mensaje}`);
        }}
      >
        Save
      </button>
      <hr />

      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
