import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Navbar /> */}
      <Hero />
    </Router>
  );
}

export default App;
