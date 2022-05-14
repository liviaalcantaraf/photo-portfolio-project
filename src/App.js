import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
