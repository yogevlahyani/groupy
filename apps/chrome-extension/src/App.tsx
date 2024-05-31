import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppStore } from "./pages/AppStore";

function App() {

  return (
    <BrowserRouter basename="index.html">
      <Routes>
        <Route
          path="/"
          Component={AppStore}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
