import React, { Component } from "react";

import Project from "./Project";
import ReactCardFlip from "react-card-flip";

import todo_list_img from "../pictures/todo_list.png";
import recipes_finder_img from "../pictures/recipes_finder.png";
import pathfinding_visualizer from "../pictures/pathfinding_visualizer.png";
import sorting_visualizer from "../pictures/sorting_visualizer.png";

import logo_css3 from "../logos/logo_css3.png";
import logo_github from "../logos/logo_github.png";
import logo_html5 from "../logos/logo_html5.png";
import logo_javascript from "../logos/logo_javascript.png";
import logo_nodejs from "../logos/logo_nodejs.png";
import logo_react from "../logos/logo_react.png";
import logo_mongodb from "../logos/logo_mongodb.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: [false, false],
      projects_back_size: [100, 100, 100, 100]
    };

    this.handleClick = this.handleClick.bind(this);
    this.getProjectsData = this.getProjectsData.bind(this);
  }

  convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  handleClick(e, index) {
    e.preventDefault();

    const flips_arr = this.state.isFlipped;
    flips_arr[index] = !flips_arr[index];

    const calcHeight =
      parseInt(document.getElementById(`project_${index}_front`).offsetHeight) -
      parseInt(this.convertRemToPixels(6));
    const arr = this.state.projects_back_size;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 100) {
        arr[i] = calcHeight;
      }
    }

    arr[index] = calcHeight;

    if (arr[index] > 300) {
      this.setState(() => ({
        isFlipped: flips_arr
      }));
    } else {
      this.setState(() => ({
        isFlipped: flips_arr,
        projects_back_size: arr
      }));
    }
  }

  getProjectsData() {
    let idx = 0;
    const arr = [];

    arr.push({
      index: idx++,
      title_front: "Pathfinding Visualizer",
      image: pathfinding_visualizer,
      description:
        "Demonstration of three algorithms for finding the shortest paths between nodes in a graph.",
      data: {
        accomplishments: ["ADD", "ADD", "ADD", "ADD"],
        logos: [logo_react, logo_javascript, logo_html5, logo_css3],
        url: {
          demo: "https://www.google.com",
          source_code: "https://www.walla.com"
        }
      }
    });

    arr.push({
      index: idx++,
      title_front: "Recipes Finder",
      image: recipes_finder_img,
      description:
        "Recipes Finder finds amazing recipes you can make, right now. Start cooking now!",
      data: {
        accomplishments: [
          "User-friendly interface design.",
          "Client-side rendering via AJAX.",
          "Worked with CSS Modules",
          "Server-side integrated with RESTful API"
        ],
        logos: [logo_javascript, logo_css3, logo_react, logo_nodejs],
        url: {
          demo: "https://www.google.com",
          source_code: "https://www.walla.com"
        }
      }
    });

    arr.push({
      index: idx++,
      title_front: "Sorting Visualizer",
      image: sorting_visualizer,
      description:
        "Visualization Tool for Sorting Algorithms. Merge, Bubble and Selection sort.",
      data: {
        accomplishments: ["ADD", "ADD", "ADD", "ADD"],
        logos: [logo_github, logo_javascript, logo_react, logo_html5],
        url: {
          demo: "https://www.google.com",
          source_code: "https://www.walla.com"
        }
      }
    });

    arr.push({
      index: idx++,
      title_front: "Todo List",
      image: todo_list_img,
      description:
        "Quickly capture what’s on your mind and get a reminder later at the right place or time.",
      data: {
        accomplishments: [
          "User-friendly interface design.",
          "ADD ANOTHER PLUS",
          "Worked with MVC framework, Node.js Server",
          "Saving Data to MongoDB Database from Node.js Application."
        ],
        logos: [logo_react, logo_nodejs, logo_mongodb, logo_github],
        url: {
          demo: "https://www.google.com",
          source_code: "https://www.walla.com"
        }
      }
    });

    return arr;
  }

  render() {
    const projectsData = this.getProjectsData();

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          margin: "auto"
        }}
      >
        {projectsData.map((project, idx) => {
          return (
            <div key={idx} style={{ margin: "0rem auto" }}>
              <ReactCardFlip
                isFlipped={this.state.isFlipped[project.index]}
                flipDirection="horizontal"
              >
                <Project
                  index={project.index}
                  isFront={!this.state.isFlipped[project.index]}
                  widthCard="30rem"
                  title={project.title_front}
                  image={project.image}
                  description={project.description}
                  onClick={event => this.handleClick(event, project.index)}
                ></Project>

                <Project
                  isFront={this.state.isFlipped[project.index]}
                  height={this.state.projects_back_size[project.index]}
                  widthCard="30rem"
                  data={project.data}
                  onClick={event => this.handleClick(event, project.index)}
                ></Project>
              </ReactCardFlip>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;

// String interpolation via recursion
// Materialize CSS frontend
// Client-side rendering via AJAX
// Developed CSS and JS responsive menu
// Integrated Twilio API
// Javascript input validation
// Front-end development in Bootstrap
// Worked with MVC framework, Node server
// Dynamic CSS color coding
// Hover and click actions
// Pulls from random word array
// Hours of fun!
// Fully responsive designs
