import React, { useState } from 'react';
import HeadAndDetails from './HeadAndDetails';
import { Link } from 'react-router';
const projectPages = [
  {
    title: "Movie App",
    date: "2025",
    institution: "SMIT",
    description: "Movie app built with HTML, CSS, and JavaScript using a movie API. Features a search bar that displays movies instantly based on user input. Clean UI and smooth performance.",
    link: "https://uzairmemon10.github.io/movie-app/"

  },
  {
    title: "To-do list",
    date: "2025",
    institution: "SMIT",
    description: "To-Do List app built with HTML, CSS, and JavaScript. Users can add, delete, and mark tasks as complete. Tasks are saved using local storage, so data stays even after refreshing the page. Clean and responsive UI for easy task management",
    link: "https://uzairmemon10.github.io/todo-list/"
  },
  {
    title: "CV Generator",
    date: "2025",
    institution: "SMIT",
    description: "CV Generator built with HTML, CSS, and JavaScript. Allows users to input personal details, skills, and experience to generate a formatted CV. Includes print and download options for easy sharing",
    link: "https://uzairmemon10.github.io/cv-generature/"
  },
  {
    title: "Weather App",
    date: "2025",
    institution: "SMIT",
    description: "Weather app built using HTML, CSS, and JavaScript with real-time data fetched from a weather API. Users can search any city to view current weather details like temperature, condition, and humidity. Clean UI with responsive design",
    link: "https://uzairmemon10.github.io/weatherapp/"
  },
  {
    title: "Tech-o-Mech",
    date: "2025",
    institution: "SMIT",
    description: "Tech O Mech is an ongoing website project built with HTML, CSS, and JavaScript. Designed for a modern, tech-focused user experience with clean UI and responsive layout. Currently under development with more features being added",
    link: "https://uzairmemon10.github.io/tech-o-mech/"
  },
  {
    title: "Grading System",
    date: "2025",
    institution: "SMIT",
    description: "Grading System built with HTML, CSS, and JavaScript. Allows users to input marks and calculate grades based on a set percentage. Includes a grading scale for easy reference",
    link: "https://uzairmemon10.github.io/grade-2/"
  }
  // Add more projects here
];

const linkSvg = (
    <svg
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M15.7281 3.88396C17.1624 2.44407 19.2604 2.41383 20.4219 3.57981C21.5856 4.74798 21.5542 6.85922 20.1189 8.30009L17.6951 10.7333C17.4028 11.0268 17.4037 11.5017 17.6971 11.794C17.9906 12.0863 18.4655 12.0854 18.7578 11.7919L21.1816 9.35869C23.0929 7.43998 23.3329 4.37665 21.4846 2.5212C19.6342 0.663551 16.5776 0.905664 14.6653 2.82536L9.81768 7.69182C7.90639 9.61053 7.66643 12.6739 9.5147 14.5293C9.80702 14.8228 10.2819 14.8237 10.5754 14.5314C10.8688 14.2391 10.8697 13.7642 10.5774 13.4707C9.41376 12.3026 9.4451 10.1913 10.8804 8.75042L15.7281 3.88396Z"
        fill="#ffffff"
      ></path>
      <path
        opacity="0.5"
        d="M14.4846 9.4707C14.1923 9.17724 13.7174 9.17632 13.4239 9.46864C13.1305 9.76097 13.1296 10.2358 13.4219 10.5293C14.5856 11.6975 14.5542 13.8087 13.1189 15.2496L8.27129 20.1161C6.83696 21.556 4.73889 21.5862 3.57742 20.4202C2.41376 19.2521 2.4451 17.1408 3.8804 15.6999L6.30424 13.2666C6.59657 12.9732 6.59565 12.4983 6.30219 12.206C6.00873 11.9137 5.53386 11.9146 5.24153 12.208L2.81769 14.6413C0.906387 16.56 0.666428 19.6234 2.5147 21.4788C4.36518 23.3365 7.42173 23.0944 9.334 21.1747L14.1816 16.3082C16.0929 14.3895 16.3329 11.3262 14.4846 9.4707Z"
        fill="#ffffff"
      ></path>
    </g>
  </svg>
)

function HeroSection4() {
  const itemsPerPage = 2;
  const totalPages = Math.ceil(projectPages.length / itemsPerPage);
  const [activePage, setActivePage] = useState(0);

  const startIndex = activePage * itemsPerPage;
  const currentProjects = projectPages.slice(startIndex, startIndex + itemsPerPage);

  const renderPageNumbers = () => (
    <div className="page-numbers">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`page-number-button ${index === activePage ? 'active-page' : ''}`}
          onClick={() => setActivePage(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  return (
    <>
    <div className="hero-section4">
        <div className="head-details-and-btn">
          <HeadAndDetails shortHead={"My Projects"} mainHead={"WHAT I'VE "} spantext={"BUILT"} mainHead2={"!"} para={"I've created a variety of responsive and interactive websites using HTML, CSS, JavaScript, and React. From sleek landing pages to dynamic full-stack apps, each project reflects my focus on clean design and user experience. Check out some of my featured projects below!"}/>
        </div>
    <div className="projects-section-container">
      {renderPageNumbers()}
      <div className="content-box">
        {currentProjects.map((project, idx) => (
          <Link to={project.link} key={idx} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <span className='svg-icon'>{linkSvg}</span>
            <span className="project-dates">{project.date}</span>
            <span className="project-institution">{project.institution}</span>
            <p className="project-description">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default HeroSection4;
