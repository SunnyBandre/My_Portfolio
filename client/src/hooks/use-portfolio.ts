import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// ============================================
// PROJECTS
// ============================================
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.projects.list.responses[200].parse(await res.json());
    },
  });
}

export function useProject(id: number) {
  return useQuery({
    queryKey: [api.projects.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.projects.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch project");
      return api.projects.get.responses[200].parse(await res.json());
    },
    enabled: !isNaN(id),
  });
}

// ============================================
// EXPERIENCE
// ============================================
export function useExperience() {
  return useQuery({
    queryKey: [api.experience.list.path],
    queryFn: async () => {
      const res = await fetch(api.experience.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch experience");
      return api.experience.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// SKILLS
// ============================================
export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      const res = await fetch(api.skills.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch skills");
      return api.skills.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// EDUCATION
// ============================================
export function useEducation() {
  return useQuery({
    queryKey: [api.education.list.path],
    queryFn: async () => {
      const res = await fetch(api.education.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch education");
      return api.education.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// PERSONAL INFO
// ============================================
export function usePersonalInfo() {
  return useQuery({
    queryKey: [api.personalInfo.get.path],
    queryFn: async () => {
      const res = await fetch(api.personalInfo.get.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch personal info");
      return api.personalInfo.get.responses[200].parse(await res.json());
    },
  });
}
