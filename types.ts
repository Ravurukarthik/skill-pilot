
export enum UserRole {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  password?: string;
}

export enum ModuleType {
  CLASS_10 = '10th Class Guide',
  INTER = 'Inter Guide',
  BTECH = 'B.Tech Guide',
  INTERNSHIPS = 'Internships',
  JOBS = 'Job Applications',
  CERTIFICATIONS = 'Certification Courses'
}

export interface SubModule {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface BTechCourse {
  id: string;
  name: string;
  code: string;
}

export interface Tutorial {
  id: string;
  subject: string;
  content: string;
  resources: string[];
}
