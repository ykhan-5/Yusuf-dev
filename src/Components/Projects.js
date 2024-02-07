import React from "react";
import SEPIMG from "../Assets/SEP.jpeg";
import NASAIMG from "../Assets/Lspace.jpeg";
import DEIIMG from "../Assets/DEI.png";
import link from "../Assets/link.png";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-title">I am currently up to...</div>
      <div className="project">
        <div className="project-pic">
          <img
            src={SEPIMG}
            alt=""
            width="800"
            style={{ borderRadius: "50px" }}
          ></img>
        </div>
        <div className="project-blurb">
          <div className="project-name">SEP Workshop Co-Facilitator</div>
          <div className="project-text">
            As a workshop facilitator for 30+ students, I provide engaging
            sessions <br />
            focused on Data Structures concepts in C++. Tailored support is
            offered to overcome <br />
            learning obstacles, resulting in a 10% exam average increase. I
            prioritize creating <br />a collaborative environment to nurture
            critical thinking and problem-solving skills <br />
            for academic success.
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-blurb">
          <div className="project-name">L'Space NPWEE Academy</div>
          <div className="project-text">
            Participating in the NASA L'SPACE Program, a 12-week online
            experience <br />
            for hands-on learning of NASA mission procedures and protocols,
            enhancing <br />
            skills in collaboration and project proposal work within the space
            industry.
          </div>
        </div>
        <div className="project-pic">
          <img
            src={NASAIMG}
            alt=""
            width="800"
            style={{ borderRadius: "50px" }}
          ></img>
        </div>
      </div>
      <div className="project">
        <div className="project-pic">
          {" "}
          <img src={DEIIMG} alt="" style={{ borderRadius: "50px" }}></img>
        </div>
        <div className="project-blurb">
          <div className="project-name">
            DEItectives&nbsp;
            <a href="https://devpost.com/software/deitectives" target="_blank">
              <img alt="" src={link} width="50" className="link"></img>
            </a>
          </div>
          <div className="project-text">
            During UTHacks 2023, my team and I presented DEItectives - a website
            <br />
            dedicated to helping students find diversity, equity, and inclusion
            <br />
            initiatives in their local area.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// one flexbox to hold everything
//-> three flexboxes, one for each project
//-> TWO items per flexbox, one image (links to project), one blurb
