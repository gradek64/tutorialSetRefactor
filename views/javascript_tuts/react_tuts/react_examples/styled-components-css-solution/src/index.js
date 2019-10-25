import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/presentational/Button/Button";
import Btn from "./components/presentational/Button/ButtonCommon";

// custom
import ProposalClassProperties from "./ES7-proposal-class-properties/ProposalClassProperties";

const Index = () => (
  <div className="helloworld">
    <h2>Weclcome to webpack 4 and babel7</h2>
    <Button primary />
    <ProposalClassProperties />
    <Btn primary />
  </div>
);

ReactDOM.render(<Index />, document.querySelector("#root"));
