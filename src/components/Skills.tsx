import React from "react";
import "../css/skills.css";

const TechStack: React.FC = () => {
  const techStack = [
    { name: "C/C++", years: "7 years", icon: "data_object", color: "#1533AD" }, // Red
    { name: "Java", years: "4 years", icon: "data_array", color: "#FF0000" }, // Red
    { name: "Python", years: "2 years", icon: "integration_instructions", color: "#FF6A00" }, // Red

    { name: "Android Studio", years: "2 years", icon: "android", color: "#8bc34a" }, // Blue

    { name: "CSS", years: "2 years", icon: "css", color: "#1531AE" }, // Red
    { name: "HTML", years: "2 years", icon: "html", color: "#f44336" }, // Red
    { name: "JavaScript", years: "1 year", icon: "javascript", color: "#FF7A00" }, // Red
    { name: "React", years: "1 year", icon: "psychology", color: "#00B060" }, // Yellow
    { name: "TypeScript", years: "1 year", icon: "code", color: "#9c27b0" }, // Purple

    { name: "1C", years: "1 year", icon: "storage", color: "#C9F600" }, // Orange

    { name: "Adobe Photoshop", years: "3 years", icon: "image", color: "#06799F" }, // Light Green
    { name: "Adobe Illustrator", years: "2 years", icon: "polyline", color: "#000000" }, // Light Green
    { name: "Adobe Premier Pro", years: "<1 year", icon: "smart_display", color: "#673ab7" }, // Light Green

  ];

  return (
    <div id="exp" className="tech-stack-page">
      
      
      <h1 className="title">Experience</h1>
      <p className="tech-stack-description">
        The time spent on creating a school or student project, on products specifically for customers or during any probationary period, as well as test tasks or contests with tasks are taken into account.
      </p>
      <div className="tech-stack-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-stack-box">
            <span className="material-icons tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </span>
            <h3>{tech.name}</h3>
            <p>{tech.years}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;