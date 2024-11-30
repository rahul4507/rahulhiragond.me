import React from "react";

const skillData = [
  {
    category: "Backend Development",
    skills: [
      "Python",
      "Django Rest Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "RabbitMQ",
      "API Performance Optimization",
    ],
  },
  {
    category: "Frontend Development",
    skills: ["JavaScript", "React", "Bootstrap"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center"
  >
    <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {skillData.map((item, index) => (
        <div
          key={index}
          className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm transform transition hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-purple-500"
        >
          <h3 className="text-xl font-bold mb-3">{item.category}</h3>
          <ul className="list-disc list-inside">
            {item.skills.map((skill, i) => (
              <li key={i} className="text-base">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
