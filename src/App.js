import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Reversestring from "./pages/Reversestring";
import Countryflags from "./pages/Countryflags";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country-flags" element={<Countryflags />} />
        <Route path="/reverse-string" element={<Reversestring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
