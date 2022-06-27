import "./App.css";

// IMPORT COMPONENTS
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route} from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {

  const URL = "https://hwprofo.herokuapp.com/";

  return (
    <div className="App">
      <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      <Footer />
    </div>
  );
}

export default App;