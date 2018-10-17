import React from "react";
import ReactDOM from "react-dom";
import SimpleHOC from "./simple_HOC";
import StateCompositionComponent from "./HOC_independent_state_composition";
import * as ListRenderComponent from "./HOC_simple_all_logic_seperated";
import HOCWithState from "./HOC_with_state";

//Search box example;
import SearchBoxExample from "./FilterDataBox/filterBox";

import "./assets/scss/app.scss";

const starWarsChars = [
  { name: "Luke", side: "light" },
  { name: "Darth Vader", side: "dark" },
  { name: "Obi-wan Kenobi", side: "light" },
  { name: "Palpatine", side: "dark" }
];

ReactDOM.render(
  <HOCWithState list={starWarsChars} side={"light"} />,
  document.getElementById("app")
);
ReactDOM.render(
  <ListRenderComponent.Set1 list={starWarsChars} side={"light"} />,
  document.getElementById("app1")
);
ReactDOM.render(
  <ListRenderComponent.Set2 list={starWarsChars} />,
  document.getElementById("app2")
);
ReactDOM.render(
  <StateCompositionComponent list={starWarsChars} />,
  document.getElementById("app3")
);
ReactDOM.render(
  <SearchBoxExample list={starWarsChars} />,
  document.getElementById("app4")
);
