/** @format */

import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
