import avatar from "../images/profile-pic.png";
import "./Hstyles.scss";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram
} from "react-icons/ti";
import {AiFillGithub} from 'react-icons/ai'
import { Link } from "react-router-dom";
// import {BsGithub, BsInstagram} from 'react-icons/bs'

export default function Home() {
  return (
    <div className="home-body">
      <div className="container"></div>
      <div className="content-container">
        <div className="editor">
          <img src={avatar} alt="not-found" />
          <header>sai prasad</header>
          <hr />
          <p>software developer</p>
          <div className="btns">
            <button className="resume">
              <Link to="/resume" className="btn-links btn-resume">
                resume
              </Link>
            </button>
            <button className="projects">
              <Link to="/projects" className="btn-links btn-projects">
                projects
              </Link>
            </button>
          </div>
          <div className="social-icons">
            <a href='https://www.linkedin.com/in/shiva-sai-prasad-bb083215a/'target="_blank"rel="noopener noreferrer"><TiSocialFacebook style={{ marginRight: "20px",fontSize:"3vh" }} /></a>
            <a href='https://www.linkedin.com/in/shiva-sai-prasad-bb083215a/'target="_blank"rel="noopener noreferrer"><TiSocialTwitter style={{ marginRight: "20px",fontSize:"3vh" }} /></a>
            <a href='https://www.linkedin.com/in/shiva-sai-prasad-bb083215a/'target="_blank"rel="noopener noreferrer" ><TiSocialLinkedin style={{ marginRight: "20px",fontSize:"3vh" }} /></a>
            <a href='https://www.linkedin.com/in/shiva-sai-prasad-bb083215a/'target="_blank"rel="noopener noreferrer"><TiSocialInstagram style={{ marginRight: "20px",fontSize:"3vh" }} /></a>
            <a href="https://github.com/saiprasadsp" target="_blank"rel="noopener noreferrer"><AiFillGithub style={{ marginRight: "20px",fontSize:"3vh" }} /></a>
          </div>
        </div>
        <div className="about-editor">
          <header>hello</header>
          <article>here's who i am & what i do</article>
          <div className="btns">
            <button className="resume">
              <Link to="/resume" className="btn-links">
                resume
              </Link>
            </button>
            <button className="projects">
              <Link to="/projects" className="btn-links">
                projects
              </Link>
            </button>
          </div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
          <p>
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}
