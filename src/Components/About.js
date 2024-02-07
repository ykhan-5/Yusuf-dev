import React from "react";
import DeskIMG from "../Assets/desk.webp";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-picture">
        <img src={DeskIMG} width="1000" style={{ borderRadius: "50px" }}></img>
      </div>
      <div className="about-text">
        <div className="about-title">ABOUT ME</div>
        <div className="about-loc">CS Student based in Houston, TX</div>
        <div className="about-blurb">
          Hi! my name is Yusuf, and I'm a CS Student at the University of
          Houston. My passion lies in solving complex <br></br>problems
          creatively. As a student instructor, I also love to help other
          students through their journey in CS.
          <br />
          <br />
          My main languages and technologies are C++, Python, React, and
          HTML/CSS.
        </div>
      </div>
    </div>
  );
};

export default About;
