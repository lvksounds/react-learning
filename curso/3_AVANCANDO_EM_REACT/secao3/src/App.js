import "./App.css";
import React from "react";
import City from "./assets/city.jpg";
import ListRender from "./components/ListRender2";

import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}

      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em Assets */}
      <div>
        <img src={City} alt="City" />
      </div>

      <ManageData />
      <ListRender></ListRender>
      <ConditionalRender />
    </div>
  );
}

export default App;
