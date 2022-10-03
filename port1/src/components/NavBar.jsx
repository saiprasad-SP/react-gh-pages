import "../styles.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
export default function NavBar() {
  return (
    <div className="navbar-body">
      <Router>
        <nav>
          <div>
            <span className="cube"></span>
            <span className="author-name">sai prasad</span>/
            <span className="position">software developer</span>
          </div>
          <div className="pages-link">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="contact">contact</Link>
            </li>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
