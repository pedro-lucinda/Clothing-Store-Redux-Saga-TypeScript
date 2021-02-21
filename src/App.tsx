import React from "react";
import Catalog from "./components/Catalog";
import GlobalStyle from "./styles/global";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
