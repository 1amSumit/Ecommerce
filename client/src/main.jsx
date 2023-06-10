import ReactDom from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/redux";

import "../index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
