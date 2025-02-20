import React from 'react';

const projectData = [
  {
    title: "Natours - Tour Booking Platform",
    description: "Full-stack tour booking platform built with Node.js, Express.js, and MongoDB. Features Stripe payment integration, JWT authentication, and automated SendGrid email notifications.",
    link: "https://github.com/rahul4507/natours", // Placeholder - resume mentions GitHub and Live Link exist
  },
  {
    title: "Rule Engine Platform",
    description: "Full-stack platform for creating and managing business rules using Abstract Syntax Trees (AST). Built with Django, PostgreSQL backend and React.js frontend.",
    link: "https://github.com/rahul4507/rule-engine-backend", // Placeholder - resume mentions GitHub link exists
  }
];

const Projects = () => (
  <section id="projects" className="min-h-screen py-20 bg-gray-50 text-center">
    <h2 className="text-4xl font-bold mb-6">Projects</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {projectData.map((project, index) => (
        <a
          href={project.link}
          key={index}
          className="bg-white p-6 rounded-lg shadow-md max-w-sm transition transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`Learn more about ${project.title}`}
        >
          <article>
            <h3 className="font-bold text-xl mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </article>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;