import React from "react";
import MAILIMG from "../Assets/mail.png";
import mailIMG from "../Assets/prin.png";

const Contact = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="con-title">CONTACT ME!</div>
      <div className="email-container">
        <img src={mailIMG} alt="" width="100"></img>
        <div className="email">
          <a
            // style="color: inherit;"
            target="_blank"
            href="mailto:ykhan4@uh.edu?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email"
          >
            ykhan4@uh.edu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//one flexbox to hold all
//one for mail, one for linkedin or something
