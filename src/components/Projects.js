const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50 text-center">
    <h2 className="text-4xl font-bold mb-6">Projects</h2>
    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
        <h3 className="font-bold text-xl mb-2">Result Analysis System</h3>
        <p>Platform for student assessment using Django and PostgreSQL.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
        <h3 className="font-bold text-xl mb-2">Inspire the Art</h3>
        <p>Dynamic platform for artists to showcase and monetize their work.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
        <h3 className="font-bold text-xl mb-2">Microservice Architecture</h3>
        <p>Developed modular solutions for log management and scalability.</p>
      </div>
    </div>
  </section>
);

export default Projects;
