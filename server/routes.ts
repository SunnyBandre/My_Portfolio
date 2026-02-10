import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // ================= PROJECTS =================
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  // ================= EXPERIENCE =================
  app.get(api.experience.list.path, async (_req, res) => {
    const exp = await storage.getExperience();
    res.json(exp);
  });

  // ================= SKILLS =================
  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // ================= EDUCATION =================
  app.get(api.education.list.path, async (_req, res) => {
    const edu = await storage.getEducation();
    res.json(edu);
  });

  // ================= PERSONAL INFO =================
  app.get(api.personalInfo.get.path, async (_req, res) => {
    const info = await storage.getPersonalInfo();
    res.json(info);
  });

  return httpServer;
}

// import type { Express } from "express";
// import type { Server } from "http";
// import { storage } from "./storage";
// import { api } from "@shared/routes";

// export async function registerRoutes(
//   httpServer: Server,
//   app: Express,
// ): Promise<Server> {
//   // Seed Database with Resume Content
//   async function seedDatabase() {
//     const existingInfo = await storage.getPersonalInfo();
//     if (!existingInfo) {
//       console.log("Seeding database...");

//       // Personal Info
//       await storage.createPersonalInfo({
//         name: "Sunny Shailesh Bandre",
//         role: "Web Developer",
//         email: "bandresunny89@gmail.com",
//         phone: "8356906342",
//         location: "Mumbai, India",
//         socialLinks: {
//           linkedin: "#", // Add actual links if available or placeholders
//           github: "#",
//         },
//         bio: "Web Developer specialized in full-stack development using React, Node.js, and modern web technologies. Passionate about creating efficient, user-friendly applications.",
//       });

//       // Experience
//       await storage.createExperience({
//         company: "Workved Space Pvt Ltd",
//         role: "Web Developer",
//         duration: "Oct 2024 - Present",
//         description: [
//           "Led project planning, delegated tasks, and ensured on-time milestone delivery.",
//           "Implemented new features and UI/UX improvements to enhance overall user experience.",
//         ],
//       });

//       await storage.createExperience({
//         company: "Softtact Technology",
//         role: "Trainee Software Developer",
//         duration: "Jan 2024 - Oct 2024",
//         description: [
//           "Developed and maintained pCare, a C# desktop medical software with a MySQL backend.",
//           "Enhanced pCare web application using React, ASP.NET, and Web API.",
//           "Automated PNDT form submission using Selenium with Chromium.",
//           "Collaborated with cross-functional teams to debug, test, and optimize application modules.",
//         ],
//       });

//       // Projects
//       await storage.createProject({
//         title: "Workved Interiors",
//         shortDescription: "BOQ generation platform",
//         fullDescription:
//           "Created a BOQ generation platform from scratch. Integrated advanced libraries for interactivity and professional functionality.",
//         techStack: [
//           "Vite",
//           "Tailwind CSS",
//           "Supabase",
//           "Three.js",
//           "GSAP",
//           "Framer Motion",
//         ],
//         link: "https://workved.com",
//         githubLink: null,
//         imageUrl: "/images/workved.jpg",
//         category: "Web",
//       });

//       await storage.createProject({
//         title: "Frameazy",
//         shortDescription: "E-commerce Frame Selling Platform",
//         fullDescription:
//           "Built a frame-selling platform with Next.js & Tailwind CSS. Integrated PhonePe for payments and Cloudinary for image storage.",
//         techStack: [
//           "Next.js",
//           "Tailwind CSS",
//           "MongoDB",
//           "Cloudinary",
//           "PhonePe",
//         ],
//         link: "https://frameazy.com",
//         githubLink: null,
//         imageUrl: "/images/frameazy.jpg",
//         category: "E-commerce",
//       });

//       await storage.createProject({
//         title: "Fastone",
//         shortDescription: "Trading Website",
//         fullDescription:
//           "Developed complete frontend using React & Tailwind CSS with smooth animations. Built responsive landing pages and login system.",
//         techStack: ["React", "Tailwind CSS"],
//         link: "https://fastoneglobalmarkets.com",
//         githubLink: null,
//         imageUrl: "/images/fastone.jpg",
//         category: "Web",
//       });

//       await storage.createProject({
//         title: "603 Coworking Space",
//         shortDescription: "Coworking Space Website",
//         fullDescription:
//           "Enhanced UI, fixed bugs, and optimized performance using React (TypeScript) & Tailwind CSS.",
//         techStack: ["React", "TypeScript", "Tailwind CSS"],
//         link: "https://603thecoworkingspace.com",
//         githubLink: null,
//         imageUrl: "/images/coworking.jpg",
//         category: "Web",
//       });

//       await storage.createProject({
//         title: "Shaishraddha",
//         shortDescription: "Android Restaurant Application",
//         fullDescription: "Android application for restaurant management.",
//         techStack: ["Java", "Android Studio"],
//         link: null,
//         githubLink: "#",
//         imageUrl: "/images/restaurant.jpg",
//         category: "Mobile",
//       });

//       await storage.createProject({
//         title: "Attendance System",
//         shortDescription: "QR Code Attendance System",
//         fullDescription: "Automated attendance system using QR codes.",
//         techStack: ["Python"],
//         link: null,
//         githubLink: "#",
//         imageUrl: "/images/attendance.jpg",
//         category: "System",
//       });

//       await storage.createProject({
//         title: "Crypto-Bubbles",
//         shortDescription: "Cryptocurrency Visualization",
//         fullDescription: "Visual representation of cryptocurrency market data.",
//         techStack: ["React"],
//         link: null,
//         githubLink: "#",
//         imageUrl: "/images/crypto.jpg",
//         category: "Web",
//       });

//       // Skills
//       await storage.createSkill({
//         category: "Programming Languages",
//         items: [
//           "Java",
//           "C",
//           "C++",
//           "Python",
//           "C#",
//           "JavaScript",
//           "HTML",
//           "CSS",
//           "TypeScript",
//         ],
//       });

//       await storage.createSkill({
//         category: "Frameworks & Libraries",
//         items: [
//           "React",
//           "Vite",
//           "Tailwind",
//           "Bootstrap",
//           "Angular",
//           "Node.js",
//           "Express.js",
//           "Next.js",
//           "Three.js",
//           "GSAP",
//         ],
//       });

//       await storage.createSkill({
//         category: "Databases & Tools",
//         items: ["SQL", "MySQL", "MongoDB", "Git", "GitHub", "AWS", "Supabase"],
//       });

//       // Education
//       await storage.createEducation({
//         degree: "Bachelor of Science (Computer Science)",
//         institution: "DG Ruparel College of Arts, Science & Commerce",
//         year: "May 2023",
//         grade: "CGPA: 9.14/10",
//       });

//       console.log("Database seeded successfully.");
//     }
//   }

//   // API Routes
//   app.get(api.projects.list.path, async (req, res) => {
//     const projects = await storage.getProjects();
//     res.json(projects);
//   });

//   app.get(api.projects.get.path, async (req, res) => {
//     const project = await storage.getProject(Number(req.params.id));
//     if (!project) return res.status(404).json({ message: "Project not found" });
//     res.json(project);
//   });

//   app.get(api.experience.list.path, async (req, res) => {
//     const exp = await storage.getExperience();
//     res.json(exp);
//   });

//   app.get(api.skills.list.path, async (req, res) => {
//     const skills = await storage.getSkills();
//     res.json(skills);
//   });

//   app.get(api.education.list.path, async (req, res) => {
//     const edu = await storage.getEducation();
//     res.json(edu);
//   });

//   app.get(api.personalInfo.get.path, async (req, res) => {
//     const info = await storage.getPersonalInfo();
//     res.json(info);
//   });

//   // Run seed
//   seedDatabase();

//   return httpServer;
// }
