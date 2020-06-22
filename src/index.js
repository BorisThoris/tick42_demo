import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducer from "./reducers";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <div className="bodyClass">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  /*eslint-disable */
  //suppress all warnings between comments
  document.getElementById("root")
  /*eslint-enable */
);

serviceWorker.unregister();
