import "../style/Project.css";
import "../style/Section.css";
import TransitionBtn from "../components/TransitionBtn.js";
import project1 from "../images/Projects/image 9.svg";
import project2 from "../images/Projects/image 10.svg";
import project3 from "../images/Projects/image 18.svg";
import project4 from "../images/Projects/image 19.svg";
import project5 from "../images/Projects/5.svg";
import rocket from "../images/Projects/Group 16.svg";

import { animated, useSpring } from "react-spring";
import React from "react";



{
  /* <link
  href="https://fonts.googleapis.com/css?family=Orbitron"
  rel="stylesheet"
></link>; */
}

const { useState } = React;




function Home() {
  const [project] = useState([
    {
      name: "Embark",
      logo: project1,
      description:
        "Identify the customer need and the larger business objectives that the product will fulfill, articulate what success looks like for the product, and rally the team to turn that vision into a reality.",
    },
    {
      name: "Knit",
      logo: project2,
      description:
        "Concerned with evolving a product’s business logic into robust backend services often in the form of developing APIs and designing database schema. Popular technologies include Node.js, Python, Go.",
    },
    {
      name: "Replay",
      logo: project3,
      description:
        "Defines the product presentation by working with the designer to translate prototypes into a dynamic UI and integrating APIs. Popular frameworks include React, Angular and Vue along with HTML/CSS.",
    },
    {
      name: "OnCampus",
      logo: project4,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
    {
      name: "RESTart",
      logo: project5,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
    {
      name: "BruinCreates",
      logo: project5,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
    {
      name: "Sike",
      logo: project5,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
    {
      name: "BruinBot",
      logo: project5,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
    {
      name: "BruinMinder",
      logo: project5,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
    {
      name: "Coming Soon!",
      logo: project5,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
  ])
 
  const ProjectImages = ({ project, children }) => (
    <div className="projects" style={{
      ...style,
    }}>{children}</div>
  );

const style = useSpring({
  from: {
    transform: "perspective(500px) rotateY(0deg)"
  },
  transform: "perspective(500px) rotateY(25deg)"
});;

  return (
    <div className="section">
      <div className="Project" id="Project">
        <div data-aos="fade-in" data-aos-duration="4000"></div>
        <h1 className="title" data-aos="fade-down" data-aos-delay="0">
          Projects
        </h1>
        <div className="projectContainer">
          {project.map((project, index) => (
            <ProjectImages key={index} project={project} style={{
              ...style,
            }}>
              <img src={project.logo} className="projectImage" alt="logo" style={{
              ...style,
            }}/>
              <p className="projectText">{project.name}</p>
            </ProjectImages>
          ))}
        </div>
        <div className="rocketContainer">
          <img src={rocket} className="rocketImage"></img>
          <p className="scrollText">Scroll to the left to view more...</p>
        </div>
      </div>
      <TransitionBtn navUrl="/Contact" />
    </div>
  );
}
export default Home;