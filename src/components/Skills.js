import React from "react";
import {
  Database,
  Code,
  Server,
  Globe,
  PlaySquare,
  Laptop,
  MessageSquare,
  Cpu,
  Box,
  Container,
  Monitor,
  Workflow,
  Cable,
  Webhook,
  Cloud,
  FileCode,
  Settings
} from "lucide-react";

const skillData = [
  {
    category: "Core Technologies",
    skills: [
      { name: "Python", icon: Code },
      { name: "Django", icon: Globe },
      { name: "PostgreSQL", icon: Database },
      { name: "Node.js", icon: Server },
      { name: "React.js", icon: PlaySquare },
      { name: "Express.js", icon: Laptop },
    ],
  },
  {
    category: "Backend & Infrastructure",
    skills: [
      { name: "Celery", icon: Workflow },
      { name: "RabbitMQ", icon: MessageSquare },
      { name: "Redis", icon: Cpu },
      { name: "MongoDB", icon: Box },
      { name: "WebSockets", icon: Cable },
      { name: "WebHooks", icon: Webhook },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Code },
      { name: "Kubernetes", icon: Code },
      { name: "GCP", icon: Container },
      { name: "Jenkins", icon: FileCode },
      { name: "Signoz", icon: Settings },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillData.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {category.skills.map((skill, i) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm md:text-base text-gray-600 group-hover:text-blue-600">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;