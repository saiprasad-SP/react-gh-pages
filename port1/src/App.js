import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BiCopyright } from "react-icons/bi";
import {TiSocialLinkedin,TiSocialInstagram} from "react-icons/ti";
import { AiFillGithub} from 'react-icons/ai'
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

const classNameFunc = ({ isActive }) =>
  isActive ? "active_link" : "not_active_link";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <div className="App">
        <Router>
          <nav>
            <div className="logo">
              <div className="cube"></div>
              <span className="author-name">sai prasad</span>
              <span className="vertical-bar"> /</span>
              <span className="designation">software developer</span>
            </div>
            <div
              className={isMobile ? "mobile-pages-link" : "pages-link"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <NavLink to="/" id="mobile-links" className={classNameFunc}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" id="mobile-links" className={classNameFunc}>
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" id="mobile-links" className={classNameFunc}>
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" id="mobile-links" className={classNameFunc}>
                  contact
                </NavLink>
              </li>
            </div>
            <button
              className="mobile-menu-bars"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? <CgClose className="close-menu"/> : <RiMenu2Fill />}
            </button>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <footer className="footer">
        <div className="editor">
          <section>
            <BiCopyright />
            2022 by Sai prasad <br />
            Proudly created with ReactJs
          </section>
        </div>
        <div className="social-contact-links">
          <section className="contact-num">
            <b>call</b> <br />
            +91-8*********
          </section>
          <section className="contact-mail">
            <b>E-Mail</b> <br />
            saiprasad.spsp90@gmail.com
          </section>
          <section className="contact-social">
            <b>follow</b> <br />
            <a href='https://www.linkedin.com/in/shiva-sai-prasad-bb083215a/'target="_blank"rel="noopener noreferrer" ><TiSocialLinkedin style={{ marginRight: "20px",fontSize:"2vh" }} /></a>
            <a href='https://www.linkedin.com/in/shiva-sai-prasad-bb083215a/'target="_blank"rel="noopener noreferrer"><TiSocialInstagram style={{ marginRight: "20px",fontSize:"2vh" }} /></a>
            <a href="https://github.com/saiprasadsp" target="_blank"rel="noopener noreferrer"><AiFillGithub style={{ marginRight: "20px",fontSize:"2vh" }} /></a>
          </section>
        </div>
      </footer>
    </>
  );
}
