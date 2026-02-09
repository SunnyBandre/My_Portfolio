
import { pgTable, text, serial, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  fullDescription: text("full_description").notNull(),
  techStack: text("tech_stack").array().notNull(), // Array of strings
  link: text("link"),
  githubLink: text("github_link"),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // e.g., "Web", "Mobile", "Design"
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  duration: text("duration").notNull(),
  description: text("description").array().notNull(), // Array of bullet points
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // e.g., "Languages", "Frameworks"
  items: text("items").array().notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  institution: text("institution").notNull(),
  year: text("year").notNull(),
  grade: text("grade"),
});

export const personalInfo = pgTable("personal_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  location: text("location"),
  socialLinks: jsonb("social_links").notNull(), // { linkedin: "", github: "" }
  bio: text("bio").notNull(),
});

// Zod Schemas
export const insertProjectSchema = createInsertSchema(projects);
export const insertExperienceSchema = createInsertSchema(experience);
export const insertSkillSchema = createInsertSchema(skills);
export const insertEducationSchema = createInsertSchema(education);
export const insertPersonalInfoSchema = createInsertSchema(personalInfo);

// Types
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Experience = typeof experience.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Education = typeof education.$inferSelect;
export type PersonalInfo = typeof personalInfo.$inferSelect;
