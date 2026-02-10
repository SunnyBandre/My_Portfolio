import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "server/data/db.json");

type DBSchema = {
  users: any[];
  projects: any[];
  skills: any[];
};

function readDB(): DBSchema {
  const defaultData: DBSchema = {
    projects: [],
    experience: [],
    skills: [],
    education: [],
    personalInfo: [],
  };

  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }

  const raw = fs.readFileSync(dbPath, "utf-8");
  const parsed = JSON.parse(raw);

  return {
    projects: Array.isArray(parsed.projects) ? parsed.projects : [],
    experience: Array.isArray(parsed.experience) ? parsed.experience : [],
    skills: Array.isArray(parsed.skills) ? parsed.skills : [],
    education: Array.isArray(parsed.education) ? parsed.education : [],
    personalInfo: Array.isArray(parsed.personalInfo) ? parsed.personalInfo : [],
  };
}

function writeDB(data: DBSchema) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

/**
 * Fake DB object (Postgres-like access)
 */
export const db = {
  get(table: keyof DBSchema) {
    const data = readDB();
    return data[table];
  },

  insert(table: keyof DBSchema, record: any) {
    const data = readDB();
    data[table].push(record);
    writeDB(data);
    return record;
  },

  update(
    table: keyof DBSchema,
    predicate: (row: any) => boolean,
    updates: any,
  ) {
    const data = readDB();
    const index = data[table].findIndex(predicate);
    if (index === -1) return null;

    data[table][index] = { ...data[table][index], ...updates };
    writeDB(data);
    return data[table][index];
  },

  delete(table: keyof DBSchema, predicate: (row: any) => boolean) {
    const data = readDB();
    data[table] = data[table].filter((row) => !predicate(row));
    writeDB(data);
    return true;
  },
};
