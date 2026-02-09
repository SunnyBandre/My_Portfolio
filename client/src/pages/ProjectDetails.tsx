import { useRoute } from "wouter";
import { useProject } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Layers } from "lucide-react";
import { Link } from "wouter";

export default function ProjectDetails() {
  const [, params] = useRoute("/project/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: project, isLoading, error } = useProject(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <article className="container-custom">
          {/* Back Button */}
          <Link href="/#projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to projects
          </Link>

          {/* Project Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                  {project.category} Project
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                  {project.title}
                </h1>
              </div>
              
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-all"
                  >
                    <Github size={20} />
                    <span>Source</span>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-16 border border-border/50 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10" />
            <img 
              src={project.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"}
              /* fallback coding desk setup */
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Layers className="text-primary" /> Project Overview
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">
                  {project.fullDescription}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Code className="text-primary" size={20} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border text-sm font-mono text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Calendar className="text-primary" size={20} /> Timeline
                </h3>
                <p className="text-muted-foreground">
                  Completed in 2024
                </p>
              </motion.div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
