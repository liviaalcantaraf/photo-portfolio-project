import { useContext } from "react";
import "./App.css";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";

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
      <Toggle />
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
