import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// custom
import store from "./redux/store";
import Home from "./Home/Home";

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
