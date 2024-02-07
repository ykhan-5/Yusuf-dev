import "./App.css";
import Home from "./Components/Home";
import Languages from "./Components/Languages";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Languages />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
