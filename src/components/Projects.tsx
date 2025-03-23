
import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      "id": 1,
      "title": "Natours",
      "description": "Natours is a tour booking application that allows users to explore and book various tours around the world.",
      "image": "/project_files/natours.png",
      "tags": ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Stripe"],
      "github": "https://github.com/rahul4507/natours",
      "demo": "https://natours-rahulhiragond.vercel.app/",
      "category": "web"
    },
    {
      id: 2,
      title: "Image Classifier",
      description: "An image classification app using a pre-trained CNN to classify images into 10 CIFAR-10 categories with a Streamlit UI.",
      image: "/project_files/image_classifier.png",
      tags: ["Python", "PyTorch", "Pillow", "CNN"],
      github: "https://github.com/rahul4507/Image-Classifier-using-CNN/",
      demo: "https://tech-titans.streamlit.app/",
      category: "web",
    },
    {
      "id": 3,
      "title": "Image Captioning",
      "description": "A simple API that generates image captions using the BLIP model from Hugging Face Transformers.",
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2571&auto=format&fit=crop",
      "tags": ["CNN", "FastAPI", "HuggingFace", "LLM"],
      "github": "https://github.com/rahul4507/image-captioning/",
      // "demo": "https://image-captioning-api.onrender.com/",
      "category": "web"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather application that provides real-time forecasts, location-based results, and interactive weather maps.",
      image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=2674&auto=format&fit=crop",
      tags: ["Django", "Weather API", "DjangoQ", "SSE(Server-Sent Events)", "Celery"],
      github: "https://github.com/rahul4507/weather-monitoring-system-backend",
      demo: "https://weather-forecast-app.vercel.app/",
      category: "mobile",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase skills, projects, and professional experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Responsive"],
      github: "https://github.com/rahul4507/rahulhiragond.me",
      demo: "https://rahulhiragond.me/",
      category: "design",
    },
    {
      id: 6,
      title: "Movie Database App",
      description: "A movie database application with search, filters, and detailed movie information.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop",
      tags: ["React", "Django", "TMDB API", "CSS3", "Context API"],
      github: "https://github.com/rahul4507?tab=repositories",
      demo: "https://movie-database-app.vercel.app/",
      category: "mobile",
    },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div
      className={`opacity-0 animate-fade-in ${isVisible ? 'animate-running' : 'animate-paused'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-card dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-card h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>

          <p className="text-muted-foreground mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 bg-secondary dark:bg-gray-700 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 md:px-12" ref={projectsRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">My Projects</h2>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex space-x-2 p-1 bg-secondary dark:bg-gray-800 rounded-lg">
            {["all", "web", "mobile", "design"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md capitalize transition-all ${filter === category
                  ? "bg-primary text-white shadow-md"
                  : "hover:bg-secondary-foreground/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${viewMode === "grid" ? "bg-primary text-white" : "bg-secondary dark:bg-gray-800"}`}
              aria-label="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setViewMode("carousel")}
              className={`p-2 rounded-md ${viewMode === "carousel" ? "bg-primary text-white" : "bg-secondary dark:bg-gray-800"}`}
              aria-label="Carousel view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
                <path d="m22 17-4-5-4 5"></path>
                <path d="m6 17 4-5 4 5"></path>
              </svg>
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <ProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mx-2" />
              <CarouselNext className="mx-2" />
            </div>
          </Carousel>
        )}

        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-700" style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub repositories.
          </p>
          <a
            href="https://github.com/rahul4507"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
