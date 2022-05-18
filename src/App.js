import { useContext } from "react";
import "./App.css";

import { ThemeContext } from "./context";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/Intro" element={<Intro />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route path="/Portfolio" element={<PortfolioPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
