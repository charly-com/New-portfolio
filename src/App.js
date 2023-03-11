import Navbar from "./components/Nav-bar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Experience />
     <SocialLinks />
     <About />
     <Portfolio />
     <Contact />
    </div>
  );
}

export default App;
