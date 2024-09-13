import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import * as _redux from "./setup";
import store from "./setup/redux/Store";
import axios from "axios";
import { App } from "./app/App";
// import "./assets/sass/style.scss";
import "./app/assets/sass/style.scss";

const { PUBLIC_URL } = process.env;

_redux.setupAxios(axios, store);

ReactDOM.render(
  <Provider store={store}>
      <App basename={PUBLIC_URL} />
  </Provider>,
  document.getElementById("root")
);
