import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";
import { TbAward } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Got To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon"></TbAward>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <TbUsers className="about__icon"></TbUsers>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Project</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
          My professional experience has been in Software Development, with 3 Years of experience in Web Development
technologies (PHP, JavaScript, SQL, REST API, jQuery, AJAX, HTML5, CSS3, etc.). I am always interested in a role that
challenges my skills and abilities.</p>
<p>Experience in system analysis, workflow design, development, and maintenance of web-based applications
 Experience in developing a highly interactive web application using JavaScript, SQL, PHP, jQuery, HTML5, AJAX, CSS3
 Experience in developing RESTful API to integrate web applications with backend RDBMS database (MySQL) to load data
dynamically using PHP and SQL
 In-depth knowledge of web technologies and standards to deliver the best user experience across web and mobile
devices including responsive Web UI
 Good Experience in designing and developing the Single Page Application (SAP)
 Good understanding of Manual Testing on Web Based Applications tested on cross device platform
 Excellent working knowledge and thorough exposure to cross-browser/cross-device compatibility, with emphasis on
Responsive Design principles and Interactive Web Design from a simple transition effect to parallax scrolling rich media
presentations
 Extensive experience in developing web applications with Agile development methodology with proficiency in
development tools Git and JIRA.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
