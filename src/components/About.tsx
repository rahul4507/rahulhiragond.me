
import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Code, Gamepad, MapPin, Music, Calendar, Briefcase } from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const experiences = 
    [
      {
        "title": "Software Engineer",
        "company": "Bynry Inc.",
        "period": "Jan 2025 - Present",
        "description": "Worked on Smart360 product; implemented backend modules and services, optimized API response times (<400ms), and designed a scalable notification service with integrated third-party APIs and comprehensive logging."
      },
      {
        "title": "Backend Developer Intern",
        "company": "Bynry Inc.",
        "period": "May 2024 - Dec 2024",
        "description": "Contributed to the Smart360 product by building backend services using Python, Django, Redis, PostgreSQL, and Celery; enhanced API efficiency and robust error-handling."
      },    
      {
        title: "Freelancer Software Developer",
        company: "Massive Dynamics",
        period: "Jan 2024 - March 2024",
        description: "Started my professional journey working on website development using Django, React, Python, and PostgreSQL."
      }
  ];

  const education = [
    {
      "degree": "B.Tech. in Computer Science and Engineering",
      "institution": "MIT Academy of Engineering, Pune",
      "period": "2021 - 2025",
      "description": "CGPA: 8.90 / 10"
    },
    {
      "degree": "12th Grade",
      "institution": "Shri Ramrav VidyaMandir and Junior College, Jath, Sangli",
      "period": "2021",
      "description": "MSBSHSE | Percentage: 91 / 100"
    },
    {
      "degree": "10th Grade",
      "institution": "Shri Mahadev Vidyalay, Jath, Sangli",
      "period": "2019",
      "description": "MSBSHSE | Percentage: 88 / 100"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={aboutRef}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About Me</h2>
        
        <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent 
            value="about" 
            className="opacity-0 animate-fade-in"
            style={{ animationPlayState: activeTab === "about" && isVisible ? "running" : "paused" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="space-y-4 text-lg text-balance">
                  <p className="opacity-0 animate-fade-in animate-delay-100" style={{ animationPlayState: isVisible ? "running" : "paused" }}>
                    Hello! I'm Rahul Hiragond, a passionate backend developer and system designer with 
                    a keen eye for creating beautiful, user-friendly digital experiences.
                  </p>
                  
                  <p className="opacity-0 animate-fade-in animate-delay-200" style={{ animationPlayState: isVisible ? "running" : "paused" }}>
                    I focus on writing clean, efficient code and creating intuitive interfaces that enhance 
                    user experience. My journey in web development started during my college years, and I've 
                    been continuously learning and improving my skills ever since.
                  </p>
                  
                  <p className="opacity-0 animate-fade-in animate-delay-300" style={{ animationPlayState: isVisible ? "running" : "paused" }}>
                    My approach to development combines technical expertise with creative problem-solving. 
                    I believe that great software should not only function flawlessly but also provide an 
                    enjoyable experience for users.
                  </p>
                  
                  <p className="opacity-0 animate-fade-in animate-delay-400" style={{ animationPlayState: isVisible ? "running" : "paused" }}>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or experimenting with creative side projects to expand my skillset.
                  </p>
                </div>
                
                <div className="mt-8 flex items-center opacity-0 animate-fade-in animate-delay-500" style={{ animationPlayState: isVisible ? "running" : "paused" }}>
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span>Based in Pune, India</span>
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="bg-card dark:bg-gray-800 rounded-xl p-6 shadow-sm opacity-0 animate-fade-in animate-delay-300" style={{ animationPlayState: isVisible ? "running" : "paused" }}>
                  <h3 className="text-xl font-bold mb-4">Personal Interests</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Coding</h4>
                        <p className="text-sm text-muted-foreground">Passionate about clean, efficient code</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Learning</h4>
                        <p className="text-sm text-muted-foreground">Always exploring new technologies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <Music className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Music</h4>
                        <p className="text-sm text-muted-foreground">Enjoy listening to various genres</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <Gamepad className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Gaming</h4>
                        <p className="text-sm text-muted-foreground">Strategy and adventure games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent 
            value="experience" 
            className="opacity-0 animate-fade-in"
            style={{ animationPlayState: activeTab === "experience" && isVisible ? "running" : "paused" }}
          >
            <div className="relative border-l-2 border-primary/30 pl-8 ml-6 space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-primary rounded-full"></div>
                  <div className="absolute -left-[33px] top-2 bottom-[-40px] w-[2px] bg-primary/30"></div>
                  <div className="mb-2 flex items-center">
                    <Briefcase className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <div className="mb-2 flex items-center text-sm font-medium text-muted-foreground">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent 
            value="education" 
            className="opacity-0 animate-fade-in"
            style={{ animationPlayState: activeTab === "education" && isVisible ? "running" : "paused" }}
          >
            <div className="relative border-l-2 border-primary/30 pl-8 ml-6 space-y-10">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-primary rounded-full"></div>
                  <div className="absolute -left-[33px] top-2 bottom-[-40px] w-[2px] bg-primary/30"></div>
                  <div className="mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                  <div className="mb-2 flex items-center text-sm font-medium text-muted-foreground">
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
