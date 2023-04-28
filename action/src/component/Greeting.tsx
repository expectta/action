import React from "react";

interface Name {
  name: string;
}

function Greeting({ name }: Name) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default Greeting;
