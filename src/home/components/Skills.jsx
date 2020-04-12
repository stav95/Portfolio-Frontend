import React, { Component } from "react";
import Skill from "./Skill";

import logo_oop from "../logos/logo_oop.png";
import logo_algo_design from "../logos/logo_algo_design.png";
import logo_ds from "../logos/logo_ds.png";

import logo_css3 from "../logos/logo_css3.png";
import logo_materialize from "../logos/logo_materialize.png";
import logo_bootstrap from "../logos/logo_bootstrap.png";

import logo_html5 from "../logos/logo_html5.png";
import logo_react from "../logos/logo_react.png";
import logo_ejs from "../logos/logo_ejs.png";

import logo_javascript from "../logos/logo_javascript.png";
import logo_redux from "../logos/logo_redux.svg";

import logo_material_ui from "../logos/logo_material_ui.svg";
import logo_express from "../logos/logo_express.png";
import logo_flask from "../logos/logo_flask.png";

import logo_nodejs from "../logos/logo_nodejs.png";
import logo_mongodb from "../logos/logo_mongodb.png";
import logo_mysql from "../logos/logo_mysql.svg";

import logo_charp from "../logos/logo_csharp.jpg";
import logo_python from "../logos/logo_python.png";
import logo_github from "../logos/logo_github.png";
import logo_selenium from "../logos/logo_selenium.png";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSkills() {
    const arr = [];

    arr.push({
      title: "Fundamentals",
      data: [
        {
          img: logo_oop,
          title: "Object-Oriented Programming",
        },
        {
          img: logo_algo_design,
          title: "Algorithm Design",
        },
        {
          img: logo_ds,
          title: "Data Structures",
        },
      ],
    });

    arr.push({
      title: "HTML",
      data: [
        {
          img: logo_html5,
          title: "HTML5",
        },
        {
          img: logo_react,
          title: "JSX",
        },
        {
          img: logo_ejs,
          title: "EJS",
        },
      ],
    });

    arr.push({
      title: "CSS",
      data: [
        {
          img: logo_css3,
          title: "CSS",
        },
        {
          img: logo_materialize,
          title: "Materialize",
        },
        {
          img: logo_bootstrap,
          title: "Bootstrap",
        },
      ],
    });

    arr.push({
      title: "Javscript",
      data: [
        {
          img: logo_javascript,
          title: "Javascript",
        },
        {
          img: logo_react,
          title: "React",
        },
        {
          img: logo_redux,
          title: "Redux",
        },
      ],
    });

    arr.push({
      title: "Back-End",
      data: [
        {
          img: logo_nodejs,
          title: "Node.js",
        },
        {
          img: logo_mongodb,
          title: "MongoDB",
        },
        {
          img: logo_mysql,
          title: "MySQL",
        },
      ],
    });

    arr.push({
      title: "Frameworks",
      data: [
        {
          img: logo_material_ui,
          title: "Material-UI",
        },
        {
          img: logo_express,
          title: "Express",
        },
        {
          img: logo_flask,
          title: "Flask",
        },
      ],
    });

    arr.push({
      title: "Other",
      data: [
        {
          img: logo_charp,
          title: "C#",
        },
        {
          img: logo_python,
          title: "Python",
        },
        {
          img: logo_selenium,
          title: "Selenium",
        },
      ],
    });

    return arr;
  }

  render() {
    const skills = this.getSkills();
    return (
      <div>
        {skills.map((skill, idx) => {
          return (
            <Skill
              key={idx}
              title={skill.title}
              data={skill.data}
              isLast={idx === skills.length - 1 ? true : false}
            ></Skill>
          );
        })}
      </div>
    );
  }
}

export default Skills;
