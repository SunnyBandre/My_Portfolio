
import { db } from "./db";
import {
  projects, experience, skills, education, personalInfo,
  type Project, type InsertProject,
  type Experience, type InsertExperience,
  type Skill, type InsertSkill,
  type Education, type InsertEducation,
  type PersonalInfo, type InsertPersonalInfo
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Experience
  getExperience(): Promise<Experience[]>;
  createExperience(exp: InsertExperience): Promise<Experience>;

  // Skills
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Education
  getEducation(): Promise<Education[]>;
  createEducation(edu: InsertEducation): Promise<Education>;

  // Personal Info
  getPersonalInfo(): Promise<PersonalInfo | undefined>;
  createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const [exp] = await db.insert(experience).values(insertExperience).returning();
    return exp;
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db.insert(skills).values(insertSkill).returning();
    return skill;
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }

  async createEducation(insertEducation: InsertEducation): Promise<Education> {
    const [edu] = await db.insert(education).values(insertEducation).returning();
    return edu;
  }

  async getPersonalInfo(): Promise<PersonalInfo | undefined> {
    const [info] = await db.select().from(personalInfo).limit(1);
    return info;
  }

  async createPersonalInfo(insertInfo: InsertPersonalInfo): Promise<PersonalInfo> {
    const [info] = await db.insert(personalInfo).values(insertInfo).returning();
    return info;
  }
}

export const storage = new DatabaseStorage();
