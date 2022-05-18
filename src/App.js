import { useContext } from "react";
import "./App.css";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
