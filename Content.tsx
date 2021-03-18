import React from "react";

let age: number = 44;

export default ({ nome, cognome }) => (
  <div>
    <p>
      {nome} {cognome} {age}
    </p>
  </div>
);
