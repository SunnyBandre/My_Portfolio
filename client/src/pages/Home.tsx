import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { 
  usePersonalInfo, 
  useProjects, 
  useExperience, 
  useSkills, 
  useEducation 
} from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { data: personalInfo } = usePersonalInfo();
  const { data: projects } = useProjects();
  const { data: experience } = useExperience();
  const { data: skills } = useSkills();
  const { data: education } = useEducation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[80px]" />
        </div>

        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium text-muted-foreground inline-block mb-6 backdrop-blur-sm">
              Hello, I'm {personalInfo?.name || "Sunny Bandre"}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-6"
          >
            <span className="text-foreground">SUNNY</span>
            <br />
            <span className="text-gradient">BANDRE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium"
          >
            {personalInfo?.role || "Web Developer"} & Software Engineer
            <br />
            <span className="text-foreground/60 text-lg">Creating high-performance digital solutions with modern technology stacks.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-4 rounded-full bg-card border border-border text-foreground font-semibold text-lg hover:bg-secondary hover:border-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Download CV <Download size={20} />
            </a>
          </motion.div>
        </div>
      </section>


      {/* ================= ABOUT / SKILLS SECTION ================= */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container-custom">
          <SectionHeading title="Skills & Expertise" subtitle="My technical toolkit and areas of focus" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4 font-display">About Me</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {personalInfo?.bio || "I am a dedicated developer with a strong foundation in building scalable web applications. I love solving complex problems and turning ideas into reality through code."}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-full bg-secondary">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <span>{personalInfo?.location || "India"}</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-full bg-secondary">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span>{personalInfo?.email || "sunny@example.com"}</span>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <div className="space-y-8">
              {skills?.map((category, idx) => (
                <div key={category.id} className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIdx) => (
                      <SkillBadge key={skill} name={skill} index={idx * 5 + skillIdx} />
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Fallback if no skills loaded yet */}
              {!skills && (
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-muted rounded w-1/3"></div>
                  <div className="flex gap-2">
                    <div className="h-10 w-24 bg-muted rounded"></div>
                    <div className="h-10 w-24 bg-muted rounded"></div>
                    <div className="h-10 w-24 bg-muted rounded"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ================= EXPERIENCE SECTION ================= */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="container-custom">
          <SectionHeading title="Work Experience" subtitle="My professional journey so far" />

          <div className="max-w-4xl mx-auto">
            {experience?.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
                
                <div className={`md:flex items-center justify-between mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1.5 z-10 shadow-[0_0_0_4px_rgba(var(--primary),0.2)]" />

                  {/* Date (Desktop side) */}
                  <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider bg-secondary/50 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="md:w-[45%]">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="md:hidden mb-4">
                         <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-secondary px-2 py-1 rounded">
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <h4 className="text-primary font-medium mb-4 flex items-center gap-2">
                        <Briefcase size={16} /> {exp.company}
                      </h4>
                      
                      <ul className="space-y-2">
                        {exp.description.map((point, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container-custom">
          <SectionHeading title="Featured Projects" subtitle="A selection of my best work" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            
            {!projects && (
              // Loading Skeletons
              [1, 2, 3].map((i) => (
                <div key={i} className="h-96 rounded-2xl bg-card border border-border animate-pulse flex flex-col overflow-hidden">
                  <div className="h-48 bg-muted" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>


      {/* ================= EDUCATION SECTION ================= */}
      <section className="py-24">
        <div className="container-custom">
          <SectionHeading title="Education" />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education?.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm">
                    <span className="font-mono text-foreground/80 bg-secondary px-2 py-0.5 rounded">
                      {edu.year}
                    </span>
                    {edu.grade && <span className="text-muted-foreground">Grade: {edu.grade}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CONTACT CTA ================= */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's work together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              I'm currently available for freelance projects and open to new opportunities.
            </p>
            
            <a 
              href={`mailto:${personalInfo?.email || "sunny@example.com"}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-foreground/80 hover:scale-105 transition-all shadow-xl"
            >
              <Mail size={22} /> Say Hello
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
