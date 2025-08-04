import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Finance Management",
    description: "An AI-powered finance tracker built with Next.js, Supabase, and Prisma. Automates budgeting and expense insights using background jobs and secure auth.",
    image: "/projects/project1.png",
    tags: ["Next.js", "Supabase", "Prisma", "TailwindCSS", "Inngest", "AI"],
    demoUrl: "https://ai-finance-management-ojbod0pjq-dhanushs-projects-ac7f2059.vercel.app",
    githubUrl: "https://github.com/codewithdhanus"
  },
  {
  id: 2,
  title: "AI Career Coach",
  description: "An AI-powered career assistant that offers mock interview sessions and resume feedback tailored to job roles. Built using OpenAI, Next.js, and Tailwind.",
  image: "/projects/project2.png", // Replace with your actual image path
  tags: ["Next.js", "OpenAI", "TailwindCSS", "AI", "shadcn/ui"],
  demoUrl: "https://ai-career-coach-git-main-dhanushs-projects-ac7f2059.vercel.app/",
  githubUrl: "https://github.com/codewithdhanus" // Replace if you have a separate repo
  },

  {
  id: 3,
  title: "AI Image Editor",
  description: "An AI-powered in-browser image editing tool built with Fabric.js and ImageKit. Enables real-time image manipulation and optimization.",
  image: "/projects/project3.png", // Replace with your actual image path
  tags: ["Next.js", "neon", "TailwindCSS", "ImageKit", "AI"],
  demoUrl: "https://ai-image-editor-qlua23ycc-dhanushs-projects-ac7f2059.vercel.app",
  githubUrl: "https://github.com/codewithdhanus" // Add specific repo if available
},
{
  id: 4,
  title: "CareConnect – Doctor Appointment Platform",
  description: "A complete appointment booking system for doctors and clinics with Clerk authentication, Vonage SMS/email integration, and PostgreSQL backend.",
  image: "/projects/project4.png", // Replace with your actual image path
  tags: ["Next.js", "Neon", "Prisma", "Clerk", "Vonage", "TailwindCSS"],
  demoUrl: "https://doctors-appointment-327cmqhbi-dhanushs-projects-ac7f2059.vercel.app",
  githubUrl: "https://github.com/codewithdhanus" // Replace with specific repo if needed
}


];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/codewithdhanus"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
