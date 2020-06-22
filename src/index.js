import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducer from "./reducers";

import * as serviceWorker from "./serviceWorker";

import indexCss from "./index.css";

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
  document.getElementById("root")
);

serviceWorker.unregister();
