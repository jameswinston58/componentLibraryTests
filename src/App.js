import React from "react";
import PrimerExample from "./primerExample.js";
import PrimerAsImportExample from "./primerAsImportExample.js";
import ReakitExample from "./reakitExample.js";
import ReakitExampleXStyled from "./reakitExampleXStyled.js";
import PricelineExample from "./pricelineExample.js";

function App() {
  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>Design System Playground</h1>
      <h4>
        All examples below are making or manipulating a button within the red
        area.
        <br />
        The red bordered area has a padding of 2rem.
        <br />
        The attempt here is to figure out how easy it is to add custom props,
        like say: size="small"
      </h4>
      <PrimerAsImportExample />
      <br />
      <br />
      <br />
      <br />
      <PrimerExample />
      <br />
      <br />
      <br />
      <br />
      <ReakitExample />
      <br />
      <br />
      <br />
      <br />
      <ReakitExampleXStyled />
      <br />
      <br />
      <br />
      <br />
      <PricelineExample />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;