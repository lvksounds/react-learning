import React from "react";
import { useState } from "react";

function ConditionalRender() {
  const [x, setx] = useState(true);

  return (
    <div>
      <button onClick={() => setx(!x)}>mude x</button>
      <h1>Isso Será exibido?</h1>
      <p>x = {x.toString()}</p>
      {x ? (
        <>
          <p>Se x for true, sim!</p>
        </>
      ) : (
        <>
          <p>se for false, não! </p>
        </>
      )}
    </div>
  );
}

export default ConditionalRender;
