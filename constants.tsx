
import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Download, 
  Layers,
  Award,
  Users
} from 'lucide-react';
import { ModuleType, BTechCourse, Internship, Job } from './types';

export const MODULES_DATA = [
  { type: ModuleType.CLASS_10, icon: <BookOpen className="w-8 h-8 text-blue-500" />, description: "Complete study resources for 10th grade students." },
  { type: ModuleType.INTER, icon: <GraduationCap className="w-8 h-8 text-purple-500" />, description: "Intermediate education (11th & 12th) resources." },
  { type: ModuleType.BTECH, icon: <Layers className="w-8 h-8 text-indigo-500" />, description: "Advanced engineering guides and tutorials." },
  { type: ModuleType.MTECH, icon: <GraduationCap className="w-8 h-8 text-cyan-500" />, description: "Post-graduate engineering specializations." },
  { type: ModuleType.MBA, icon: <Briefcase className="w-8 h-8 text-rose-500" />, description: "Management and business administration resources." },
  { type: ModuleType.COMPETITIVE_EXAMS, icon: <Award className="w-8 h-8 text-yellow-500" />, description: "GATE, CAT, UPSC and other exam materials." },
  { type: ModuleType.INTERNSHIPS, icon: <Users className="w-8 h-8 text-green-500" />, description: "Explore latest internship opportunities." },
  { type: ModuleType.JOBS, icon: <Briefcase className="w-8 h-8 text-orange-500" />, description: "Find and apply for top tech and non-tech jobs." },
  { type: ModuleType.CERTIFICATIONS, icon: <Award className="w-8 h-8 text-red-500" />, description: "Boost your resume with professional certificates." }
];

export const SUB_MODULES_GENERAL = [
  { id: 'papers', title: 'Previous Question Papers', icon: <FileText className="w-5 h-5" />, description: 'Download papers from the last 10 years.' },
  { id: 'tutorials', title: 'Subject Wise Tutorials', icon: <BookOpen className="w-5 h-5" />, description: 'Step-by-step learning modules.' },
  { id: 'hallticket', title: 'Hall Ticket Download', icon: <Download className="w-5 h-5" />, description: 'Access your exam permits easily.' },
  { id: 'marks', title: 'Mark List Download', icon: <FileText className="w-5 h-5" />, description: 'Retrieve your academic results.' },
];

export const PAPER_LINKS_10TH: Record<string, string> = {
  'Telugu': 'https://static.collegedekho.com/media/uploads/2025/06/13/01t-02t-1.pdf',
  'Hindi': 'https://static.collegedekho.com/media/uploads/2025/06/13/bseap_hindi_66825c82257dfb80881ba1ac9e1cab31.pdf',
  'English': 'https://static.collegedekho.com/media/uploads/2025/06/13/13-e-14-e-1.pdf',
  'Mathematics': 'https://static.collegedekho.com/media/uploads/2025/06/13/15-e-16-e-1.pdf',
  'Physics': 'https://static.collegedekho.com/media/uploads/2025/06/13/ap-10th-2024-general-science-1.pdf',
  'Biology': 'https://static.collegedekho.com/media/uploads/2025/06/13/ap-10th-2024-general-science-2.pdf',
  'Social Studies': 'https://static.collegedekho.com/media/uploads/2025/06/13/21-e-22-e-1.pdf'
};

export const PAPER_LINKS_INTER_1ST: Record<string, string> = {
  'Sanskrit (1st Year)': 'https://static.collegedekho.com/media/uploads/2022/08/11/sanskrit-i.pdf',
  'English (1st Year)': 'https://static.collegedekho.com/media/uploads/2022/08/11/english-iml.pdf',
  'Maths 1A': 'https://static.collegedekho.com/media/uploads/2022/08/11/mathematics-iaem.pdf',
  'Maths 1B': 'https://static.collegedekho.com/media/uploads/2022/08/11/mathematics-ibem.pdf',
  'Physics (1st Year)': 'https://static.collegedekho.com/media/uploads/2022/08/11/physics-iem.pdf',
  'Chemistry (1st Year)': 'https://static.collegedekho.com/media/uploads/2022/08/11/chemistry-iem.pdf'
};

export const PAPER_LINKS_INTER_2ND: Record<string, string> = {
  'Sanskrit (2nd Year)': 'https://drive.google.com/file/d/18eagPMvo-4wrgj6ubUBb7v4c2_-9mpPt/view',
  'English (2nd Year)': 'https://static.collegedekho.com/media/uploads/2025/07/03/ap-inter-ii-yr-english-paper-2-march-2025.pdf',
  'Maths 2A': 'https://static.collegedekho.com/media/uploads/2022/08/11/mathematics-iiaem.pdf',
  'Maths 2B': 'https://static.collegedekho.com/media/uploads/2025/06/13/2nd-year-maths-2b-2024.pdf',
  'Physics (2nd Year)': 'https://static.collegedekho.com/media/uploads/2022/08/11/physics-iiem.pdf',
  'Chemistry (2nd Year)': 'https://static.collegedekho.com/media/uploads/2022/08/11/chemistry-iiem.pdf'
};

export const HALL_TICKET_LINK_10TH = 'https://bse.ap.gov.in/apsschtttfy/ASEDefault.aspx';

export const HALL_TICKET_LINKS_INTER = {
  '1st_YEAR_REGULAR': 'https://www.results.manabadi.co.in/2025/AP/Inter/1st-year/AP-Intermediate-1st-year-regular-exam-results-April-2025-080425.htm',
  '1st_YEAR_SUPPLY': 'https://www.results.manabadi.co.in/2025/AP/Inter-Sup/1st-year/Mobile/AP-Intermediate-1st-year-supply-exam-results-june-2025-060625.htm',
  '2nd_YEAR_REGULAR': 'https://www.results.manabadi.co.in/2025/AP/Inter/2nd-year/AP-Intermediate-2nd-year-regular-exam-results-Apr-2025-080425.htm',
  '2nd_YEAR_SUPPLY': 'https://www.results.manabadi.co.in/2025/AP/Inter-Sup/2nd-year/Mobile/AP-Intermediate-2nd-year-supply-exam-results-june-2025-060625-Popup.htm'
};

export const MARK_LIST_LINK_10TH = 'https://bse.ap.gov.in/RESULTSTWT/';

export const MARK_LIST_LINKS_INTER = {
  '1st_YEAR_REGULAR': 'https://www.results.manabadi.co.in/2025/AP/Inter/1st-year/AP-Intermediate-1st-year-regular-exam-results-April-2025-080425.htm',
  '1st_YEAR_SUPPLY': 'https://www.results.manabadi.co.in/2025/AP/Inter-Sup/1st-year/Mobile/AP-Intermediate-1st-year-supply-exam-results-june-2025-060625.htm',
  '2nd_YEAR_REGULAR': 'https://www.results.manabadi.co.in/2025/AP/Inter/2nd-year/AP-Intermediate-2nd-year-regular-exam-results-Apr-2025-080425.htm',
  '2nd_YEAR_SUPPLY': 'https://www.results.manabadi.co.in/2025/AP/Inter-Sup/2nd-year/Mobile/AP-Intermediate-2nd-year-supply-exam-results-june-2025-060625-Popup.htm'
};

export const BTECH_COURSES: BTechCourse[] = [
  { id: 'cse', name: 'Computer Science & Engineering', code: 'CSE' },
  { id: 'cse-aiml', name: 'CSE (AI & Machine Learning)', code: 'CSE(AIML)' },
  { id: 'cse-aids', name: 'CSE (AI & Data Science)', code: 'CSE(AIDS)' },
  { id: 'cse-iot', name: 'CSE (IoT & CSBT)', code: 'CSE(IoT&CSBT)' },
  { id: 'cse-it', name: 'Information Technology', code: 'CSE(IT)' },
  { id: 'ece', name: 'Electronics & Comm Engineering', code: 'ECE' },
  { id: 'ece-vlsi', name: 'ECE (VLSI Design)', code: 'ECE(VLSI)' },
  { id: 'civil', name: 'Civil Engineering', code: 'CIVIL' },
  { id: 'mechanical', name: 'Mechanical Engineering', code: 'MECHANICAL' },
  { id: 'eee', name: 'Electrical & Electronics Engineering', code: 'EEE' },
];

export const MTECH_BRANCHES: BTechCourse[] = [
  { id: 'mtech-cse', name: 'Computer Science & Engineering', code: 'CSE' },
  { id: 'mtech-aids', name: 'Artificial Intelligence & Data Science', code: 'AIDS' },
  { id: 'mtech-ece', name: 'Electronics & Comm Engineering', code: 'ECE' },
  { id: 'mtech-mechanical', name: 'Mechanical Engineering', code: 'MECHANICAL' },
  { id: 'mtech-civil', name: 'Civil Engineering', code: 'CIVIL' },
  { id: 'mtech-eee', name: 'Electrical & Electronics Engineering', code: 'EEE' },
];

export const MBA_YEARS: BTechCourse[] = [
  { id: 'mba-1st', name: 'First Year MBA', code: '1st Year' },
  { id: 'mba-2nd', name: 'Second Year MBA', code: '2nd Year' },
];

export const COMPETITIVE_EXAM_CATEGORIES: BTechCourse[] = [
  { id: 'eng-tech-exams', name: 'Engineering & Technology Exams', code: 'ENGG' },
  { id: 'medical-exams', name: 'Medical Exams', code: 'MED' },
  { id: 'gov-civil-exams', name: 'Government / Civil Services Exams', code: 'CIVIL' },
  { id: 'banking-exams', name: 'Banking Exams', code: 'BANK' },
  { id: 'defence-exams', name: 'Defence Exams', code: 'DEF' },
  { id: 'other-imp-exams', name: 'Other Important Exams', code: 'IMP' },
  { id: 'other-gov-exams', name: 'Other Government Exams', code: 'GOV' },
];

export const SUBJECTS_MOCK: Record<string, string[]> = {
  '10th Class Guide': ['Telugu', 'Hindi', 'English', 'Mathematics', 'Physics', 'Biology', 'Social Studies'],
  'Inter Guide 1st Year': ['Sanskrit (1st Year)', 'English (1st Year)', 'Maths 1A', 'Maths 1B', 'Physics (1st Year)', 'Chemistry (1st Year)'],
  'Inter Guide 2nd Year': ['Sanskrit (2nd Year)', 'English (2nd Year)', 'Maths 2A', 'Maths 2B', 'Physics (2nd Year)', 'Chemistry (2nd Year)'],
  'Inter Guide': ['MPC (Maths, Physics, Chemistry)', 'BiPC (Biology, Physics, Chemistry)', 'CEC', 'HEC'],
  'cse': ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  'ece': ['Microprocessors', 'Digital Electronics', 'Signals & Systems', 'Control Systems'],
  'civil': ['Structural Analysis', 'Fluid Mechanics', 'Surveying', 'Geotechnical Engineering'],
  'mtech-cse': ['Advanced Algorithms', 'Distributed Systems', 'Cloud Computing', 'Network Security'],
  'mtech-aids': ['Machine Learning', 'Deep Learning', 'Big Data Analytics', 'Natural Language Processing'],
  'mtech-ece': ['Embedded Systems', 'VLSI Design', 'Digital Signal Processing', 'Wireless Communications'],
  'mtech-mechanical': ['Advanced Thermodynamics', 'Robotics', 'CAD/CAM', 'Finite Element Analysis'],
  'mtech-civil': ['Advanced Structural Design', 'Environmental Engineering', 'Transportation Engineering', 'Construction Management'],
  'mtech-eee': ['Power Systems', 'Electric Drives', 'Renewable Energy', 'Smart Grids'],
  'mba-1st': ['Management Principles', 'Marketing Management', 'Financial Accounting', 'Human Resource Management'],
  'mba-2nd': ['Strategic Management', 'Entrepreneurship', 'Business Ethics', 'International Business'],
  'M.Tech Guide': ['Advanced Mathematics', 'Research Methodology', 'Specialization Elective I', 'Specialization Elective II'],
  'MBA Guide': ['Marketing Management', 'Financial Accounting', 'Organizational Behavior', 'Business Analytics'],
  'Competitive Exams': [
    'Engineering & Technology Exams', 
    'Medical Exams', 
    'Government / Civil Services Exams', 
    'Banking Exams', 
    'Defence Exams', 
    'Other Important Exams', 
    'Other Government Exams'
  ],
  'eng-tech-exams': ['GATE', 'JEE Mains', 'JEE Advanced', 'BITSAT', 'VITEEE'],
  'medical-exams': ['NEET UG', 'NEET PG', 'AIIMS', 'JIPMER'],
  'gov-civil-exams': ['UPSC Civil Services', 'APPSC Group 1', 'APPSC Group 2', 'SSC CGL'],
  'banking-exams': ['IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'RBI Grade B'],
  'defence-exams': ['NDA', 'CDS', 'AFCAT', 'Indian Navy Entrance'],
  'other-imp-exams': ['CAT', 'MAT', 'XAT', 'CLAT'],
  'other-gov-exams': ['Railway Recruitment (RRB)', 'Post Office Exams', 'Police Recruitment'],
};

export const INTERNSHIP_MOCK: Internship[] = [
  { 
    id: 'tcs-internship', 
    title: 'TCS Internship Program', 
    company: 'Tata Consultancy Services (TCS)', 
    stipend: null, 
    duration: '8-12 Weeks', 
    location: 'Pan India / Remote', 
    type: 'unpaid', 
    link: 'https://www.tcs.com/careers/india/internship',
    description: 'Accelerate your career with TCS internships'
  },
];

export const JOBS_MOCK: Job[] = [
  {
    id: 'ge-hc-get',
    title: 'Graduate Engineer Trainee',
    company: 'GE HealthCare',
    postedAt: '6 days ago',
    applicants: 'Over 300 applicants',
    location: 'Bengaluru, India',
    description: 'Ensure an uninterrupted supply of materials to support production and sales. Work to resolve materials issues while achieving and maintaining inventory business metrics. Roles: Material ordering, scheduling, Oracle expert, inventory accuracy, rescheduling, root cause investigation.',
    link: 'https://www.foundit.in/seeker-profile/single-page-registration?jobid=143011155&spl=IN_paid_display_direct_acq_affiliate_Asterix_FO2011_Multiple_Apr25&utm_source=Asterix&utm_medium=affiliate&utm_campaign=IN_paid_display_direct_acq_affiliate_Asterix_FO2011_Multiple_Apr25',
    type: 'Permanent Job'
  }
];
