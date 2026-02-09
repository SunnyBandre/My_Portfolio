import { PORTFOLIO_DATA } from "@/lib/data";

// ============================================
// PROJECTS
// ============================================
export function useProjects() {
  return {
    data: PORTFOLIO_DATA.projects,
    isLoading: false,
    error: null
  };
}

export function useProject(id: number) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
  return {
    data: project || null,
    isLoading: false,
    error: null
  };
}

// ============================================
// EXPERIENCE
// ============================================
export function useExperience() {
  return {
    data: PORTFOLIO_DATA.experience,
    isLoading: false,
    error: null
  };
}

// ============================================
// SKILLS
// ============================================
export function useSkills() {
  return {
    data: PORTFOLIO_DATA.skills,
    isLoading: false,
    error: null
  };
}

// ============================================
// EDUCATION
// ============================================
export function useEducation() {
  return {
    data: PORTFOLIO_DATA.education,
    isLoading: false,
    error: null
  };
}

// ============================================
// PERSONAL INFO
// ============================================
export function usePersonalInfo() {
  return {
    data: PORTFOLIO_DATA.personalInfo,
    isLoading: false,
    error: null
  };
}
