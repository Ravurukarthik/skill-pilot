
export enum UserRole {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isPremium: boolean;
  isPendingVerification?: boolean;
  paymentProofUrl?: string;
  paymentDate?: string;
  password?: string;
  createdAt?: string;
  provider?: string;
  providerData?: any[];
  phoneNumber?: string;
}

export enum ModuleType {
  CLASS_10 = '10th Class Guide',
  INTER = 'Inter Guide',
  BTECH = 'B.Tech Guide',
  MTECH = 'M.Tech Guide',
  MBA = 'MBA Guide',
  COMPETITIVE_EXAMS = 'Competitive Exams',
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

export interface Internship {
  id: string;
  title: string;
  company: string;
  stipend: string | null;
  duration: string;
  location: string;
  type: 'paid' | 'unpaid';
  link: string;
  description?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  postedAt: string;
  applicants: string;
  location: string;
  description: string;
  link: string;
  type: string;
}
