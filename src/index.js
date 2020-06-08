import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { LoadingOutlined } from "@ant-design/icons";
import App from "./containers/App";
import rootReducer from "./reducers";

import "antd/dist/antd.css";
import "./styles/App.css";
import "./styles/normalize.css";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Router>
    <Suspense
      fallback={
        <div className="loader-container">
          <LoadingOutlined
            style={{ fontSize: 24, color: "#222c81", marginTop: "2rem" }}
            spin
          />
          <div>Catching...</div>
        </div>
      }
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
