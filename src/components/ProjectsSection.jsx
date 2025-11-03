import { Link } from "react-router-dom";
import { ArrowRight, Diamond, ExternalLink, Github } from "lucide-react";
import Heading from "@/components/ui/Heading";

const projects = [
  {
    id: 1,
    title: "Furniture Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://mrfurniture-landing.netlify.app",
    githubUrl: "https://github.com/MosfiqurRubel",
    netlifyUrl: "https://app.netlify.com/teams/mosfiqurrubel/projects",
  },
  {
    id: 2,
    title: "HireGo Simple page",
    description:
      "Interactive simple page with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "TailwindCSS"],
    demoUrl: "https://rainbow-wisp-90422f.netlify.app/",
    githubUrl: "https://github.com/MosfiqurRubel",
    netlifyUrl: "https://app.netlify.com/teams/mosfiqurrubel/projects",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/MosfiqurRubel",
    netlifyUrl: "https://app.netlify.com/teams/mosfiqurrubel/projects",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Heading
          align="center"
          className="md:text-4xl mb-12 text-center space-x-2"
        >
          Featured <span className="text-primary">Projects</span>
        </Heading>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Link
                      to={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <Link
                      to={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      to={project.netlifyUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Diamond size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="https://github.com/MosfiqurRubel"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
