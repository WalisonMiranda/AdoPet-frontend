import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import store, { persistor } from "./store";

import { Header } from "./components";
import { Routes } from "./routes";
import history from "./services/history";

import GlobalStyle from "./globalStyles.js";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} className="toast-container" />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
