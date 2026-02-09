import { Link } from "wouter";
import { Project } from "@shared/schema";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors z-10" />
        <img
          src={project.imageUrl || "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80"} 
          /* fallback tech background */
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="View Source"
              >
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          
          <Link href={`/project/${project.id}`} className="flex items-center text-sm font-semibold text-primary hover:translate-x-1 transition-transform">
            Details <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
