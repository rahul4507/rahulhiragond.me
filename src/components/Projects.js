const projectData = [
  {
    title: "Result Analysis System",
    description: "Platform for student assessment using Django and PostgreSQL.",
    link: "#", // Replace with the project/demo link
  },
  {
    title: "Inspire the Art",
    description:
      "Dynamic platform for artists to showcase and monetize their work.",
    link: "#", // Replace with the project/demo link
  },
  {
    title: "Microservice Architecture",
    description:
      "Developed modular solutions for log management and scalability.",
    link: "#", // Replace with the project/demo link
  },
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
