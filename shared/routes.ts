
import { z } from 'zod';
import { insertProjectSchema, insertExperienceSchema, insertSkillSchema, insertEducationSchema, insertPersonalInfoSchema } from './schema';

export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects' as const,
      responses: {
        200: z.array(insertProjectSchema.extend({ id: z.number() })),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/projects/:id' as const,
      responses: {
        200: insertProjectSchema.extend({ id: z.number() }),
        404: z.object({ message: z.string() }),
      },
    },
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience' as const,
      responses: {
        200: z.array(insertExperienceSchema.extend({ id: z.number() })),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills' as const,
      responses: {
        200: z.array(insertSkillSchema.extend({ id: z.number() })),
      },
    },
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education' as const,
      responses: {
        200: z.array(insertEducationSchema.extend({ id: z.number() })),
      },
    },
  },
  personalInfo: {
    get: {
      method: 'GET' as const,
      path: '/api/personal-info' as const,
      responses: {
        200: insertPersonalInfoSchema.extend({ id: z.number() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
