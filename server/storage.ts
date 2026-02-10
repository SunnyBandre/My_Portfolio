import { db } from "./db";
import {
  type Project,
  type InsertProject,
  type Experience,
  type InsertExperience,
  type Skill,
  type InsertSkill,
  type Education,
  type InsertEducation,
  type PersonalInfo,
  type InsertPersonalInfo,
} from "@shared/schema";

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
  // ================= PROJECTS =================
  async getProjects(): Promise<Project[]> {
    return db.get("projects");
  }

  async getProject(id: number): Promise<Project | undefined> {
    return db.get("projects").find((p) => p.id === id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const project: Project = {
      id: Date.now(), // simple auto-id
      ...insertProject,
    };

    db.insert("projects", project);
    return project;
  }

  // ================= EXPERIENCE =================
  async getExperience(): Promise<Experience[]> {
    return db.get("experience");
  }

  async createExperience(
    insertExperience: InsertExperience,
  ): Promise<Experience> {
    const exp: Experience = {
      id: Date.now(),
      ...insertExperience,
    };

    db.insert("experience", exp);
    return exp;
  }

  // ================= SKILLS =================
  async getSkills(): Promise<Skill[]> {
    return db.get("skills");
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const skill: Skill = {
      id: Date.now(),
      ...insertSkill,
    };

    db.insert("skills", skill);
    return skill;
  }

  // ================= EDUCATION =================
  async getEducation(): Promise<Education[]> {
    return db.get("education");
  }

  async createEducation(insertEducation: InsertEducation): Promise<Education> {
    const edu: Education = {
      id: Date.now(),
      ...insertEducation,
    };

    db.insert("education", edu);
    return edu;
  }

  // ================= PERSONAL INFO =================
  async getPersonalInfo(): Promise<PersonalInfo | undefined> {
    return db.get("personalInfo")[0];
  }

  async createPersonalInfo(
    insertInfo: InsertPersonalInfo,
  ): Promise<PersonalInfo> {
    const info: PersonalInfo = {
      id: Date.now(),
      ...insertInfo,
    };

    // allow only ONE personal info record
    db.delete("personalInfo", () => true);
    db.insert("personalInfo", info);

    return info;
  }
}

export const storage = new DatabaseStorage();
