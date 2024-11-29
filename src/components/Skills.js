const Skills = () => (
  <section
    id="skills"
    className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center"
  >
    <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white text-black p-4 rounded shadow-lg max-w-sm">
        <h3 className="text-xl font-bold mb-2">Backend Development</h3>
        <p>Python, Django Rest Framework, Redis, PostgreSQL, Celery</p>
      </div>
      <div className="bg-white text-black p-4 rounded shadow-lg max-w-sm">
        <h3 className="text-xl font-bold mb-2">Frontend Basics</h3>
        <p>React, Bootstrap, JavaScript</p>
      </div>
      <div className="bg-white text-black p-4 rounded shadow-lg max-w-sm">
        <h3 className="text-xl font-bold mb-2">Tools</h3>
        <p>Git, GitHub, RabbitMQ, API Performance Optimization</p>
      </div>
    </div>
  </section>
);

export default Skills;
