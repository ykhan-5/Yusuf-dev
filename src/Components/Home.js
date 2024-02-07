import React from "react";
import Navbar from "./Navbar";
import LinkedinIMG from "../Assets/linkedin.png";
import GithubIMG from "../Assets/github.png";
import ResumeIMG from "../Assets/resume.png";
import HandIMG from "../Assets/wave.png";
import ProfilePic from "../Assets/1st Interview copy.png";
// import ProfileTwo from "../Assets/p2.jpeg";
import { Nav } from "./Nav";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div id="home-container" className="home-container">
        <div className="home-text">
          <div className="new-cont">
            <div className="text-cont">
              <h1 className="primary-header">
                Honors Computer Science Student{" "}
                <img src={HandIMG} width="100"></img>
              </h1>
              <h6 className="para">
                Hi, i'm Yusuf Khan. <br></br>A passionate Computer Science
                student at the University of Houston.
              </h6>

              <div className="icon-container">
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/yusufkh"
                  target="_blank"
                >
                  <img
                    src={LinkedinIMG}
                    alt="linkedin Link"
                    width="450"
                    height="150"
                  ></img>
                </a>
                <a
                  className="icon"
                  href="https://github.com/ykhan-5"
                  target="_blank"
                >
                  <img
                    src={GithubIMG}
                    alt="github link"
                    width="450"
                    height="150"
                  ></img>
                </a>
                <a
                  className="icon"
                  href="https://yusufkhancs.tiiny.site/"
                  target="_blank"
                >
                  <img
                    src={ResumeIMG}
                    alt="resume link"
                    width="450"
                    height="150"
                  ></img>
                </a>
              </div>
            </div>
            <div className="ProfilePic">
              <img
                src={ProfilePic}
                width="800"
                style={{ borderRadius: "1000px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
