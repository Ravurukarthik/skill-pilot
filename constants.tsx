
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
import { ModuleType, BTechCourse, Internship } from './types';

export const MODULES_DATA = [
  { type: ModuleType.CLASS_10, icon: <BookOpen className="w-8 h-8 text-blue-500" />, description: "Complete study resources for 10th grade students." },
  { type: ModuleType.INTER, icon: <GraduationCap className="w-8 h-8 text-purple-500" />, description: "Intermediate education (11th & 12th) resources." },
  { type: ModuleType.BTECH, icon: <Layers className="w-8 h-8 text-indigo-500" />, description: "Advanced engineering guides and tutorials." },
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

export const SUBJECTS_MOCK: Record<string, string[]> = {
  '10th Class Guide': ['Telugu', 'Hindi', 'English', 'Mathematics', 'Physics', 'Biology', 'Social Studies'],
  'Inter Guide 1st Year': ['Sanskrit (1st Year)', 'English (1st Year)', 'Maths 1A', 'Maths 1B', 'Physics (1st Year)', 'Chemistry (1st Year)'],
  'Inter Guide 2nd Year': ['Sanskrit (2nd Year)', 'English (2nd Year)', 'Maths 2A', 'Maths 2B', 'Physics (2nd Year)', 'Chemistry (2nd Year)'],
  'Inter Guide': ['MPC (Maths, Physics, Chemistry)', 'BiPC (Biology, Physics, Chemistry)', 'CEC', 'HEC'],
  'cse': ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  'ece': ['Microprocessors', 'Digital Electronics', 'Signals & Systems', 'Control Systems'],
  'civil': ['Structural Analysis', 'Fluid Mechanics', 'Surveying', 'Geotechnical Engineering'],
};

export const INTERNSHIP_MOCK: Internship[] = [
  { id: '1', title: 'React Frontend Developer', company: 'TechNova Solutions', stipend: '₹15,000/mo', duration: '3 Months', location: 'Remote', type: 'paid', link: '#' },
  { id: '2', title: 'Data Science Intern', company: 'Insight Analytics', stipend: '₹20,000/mo', duration: '6 Months', location: 'Hyderabad', type: 'paid', link: '#' },
  { id: '3', title: 'UX/UI Designer', company: 'Creative Peak', stipend: '₹12,000/mo', duration: '4 Months', location: 'Bangalore', type: 'paid', link: '#' },
  { id: '4', title: 'Python Backend Trainee', company: 'Alpha Systems', stipend: null, duration: '2 Months', location: 'Remote', type: 'unpaid', link: '#' },
  { id: '5', title: 'Social Media Marketing', company: 'RK Foundations', stipend: null, duration: '3 Months', location: 'Remote', type: 'unpaid', link: '#' },
  { id: '6', title: 'Java Developer Intern', company: 'Global Soft', stipend: null, duration: '6 Months', location: 'Chennai', type: 'unpaid', link: '#' },
];
