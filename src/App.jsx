import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contacts/Contacts";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // On root route with a hash, scroll to that section
    if (pathname === "/" && hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // When navigating to "/", without a hash, go to top
    if (pathname === "/" && !hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash, pathname]);

  return null;
}

// A wrapper for the one‑page layout
function MainPage() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/projects/:key" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

// <Router>
//   <Navbar />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/projects" element={<Projects />} />
//     <Route path="/contact" element={<Contact />} />
//   </Routes>
// </Router>
{
  /* <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main> */
}
