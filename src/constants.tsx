
import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Download, 
  Layers,
  Award,
  Users,
  Code,
  Trophy
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
  { type: ModuleType.CERTIFICATIONS, icon: <Award className="w-8 h-8 text-red-500" />, description: "Boost your resume with professional certificates." },
  { type: ModuleType.CODING_SESSION, icon: <Code className="w-8 h-8 text-emerald-500" />, description: "Access all coding compilers and IDEs in one place." },
  { type: ModuleType.EXAMS, icon: <FileText className="w-8 h-8 text-amber-500" />, description: "Stay updated with latest academic, semester, and professional exam notifications." },
  { type: ModuleType.HACKATHONS, icon: <Trophy className="w-8 h-8 text-yellow-400" />, description: "Compete in global hackathons and showcase your skills." }
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

export const PAPER_LINKS_BTECH: Record<string, string> = {
  'Data Structures': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Data-Structures-Previous-Question-Papers.pdf',
  'Algorithms': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Design-and-Analysis-of-Algorithms-Previous-Question-Papers.pdf',
  'DBMS': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Database-Management-Systems-Previous-Question-Papers.pdf',
  'Operating Systems': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Operating-Systems-Previous-Question-Papers.pdf',
  'Computer Networks': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Computer-Networks-Previous-Question-Papers.pdf',
  'Microprocessors': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Microprocessors-and-Microcontrollers-Previous-Question-Papers.pdf',
  'Digital Electronics': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Digital-Electronics-Previous-Question-Papers.pdf',
  'Signals & Systems': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Signals-and-Systems-Previous-Question-Papers.pdf',
  'Control Systems': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Control-Systems-Previous-Question-Papers.pdf',
  'Structural Analysis': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Structural-Analysis-I-Previous-Question-Papers.pdf',
  'Fluid Mechanics': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Fluid-Mechanics-Previous-Question-Papers.pdf',
  'Surveying': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Surveying-Previous-Question-Papers.pdf',
  'Geotechnical Engineering': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Geotechnical-Engineering-I-Previous-Question-Papers.pdf'
};

export const PAPER_LINKS_MTECH: Record<string, string> = {
  'Advanced Algorithms': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Advanced-Algorithms-Previous-Question-Papers.pdf',
  'Distributed Systems': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Distributed-Systems-Previous-Question-Papers.pdf',
  'Cloud Computing': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Cloud-Computing-Previous-Question-Papers.pdf',
  'Network Security': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Network-Security-Previous-Question-Papers.pdf'
};

export const PAPER_LINKS_MBA: Record<string, string> = {
  'Management Principles': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Management-Principles-Previous-Question-Papers.pdf',
  'Marketing Management': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Marketing-Management-Previous-Question-Papers.pdf',
  'Financial Accounting': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Financial-Accounting-Previous-Question-Papers.pdf',
  'Human Resource Management': 'https://www.jntufastupdates.com/wp-content/uploads/2018/03/Human-Resource-Management-Previous-Question-Papers.pdf'
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
  '1st_YEAR_REGULAR': 'https://results.eenadu.net/exam-results/ap-inter-1st-year-results-2026-general',
  '1st_YEAR_SUPPLY': 'https://www.results.manabadi.co.in/2025/AP/Inter-Sup/1st-year/Mobile/AP-Intermediate-1st-year-supply-exam-results-june-2025-060625.htm',
  '2nd_YEAR_REGULAR': 'https://results1.sakshieducation.com/andhrapradesh/inter/year2/general.html',
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
  'Coding Session': ['Universal IDE', 'C', 'C++', 'C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'Ruby', 'Go', 'Swift', 'Rust', 'Kotlin', 'HTML/CSS/JS', 'React', 'Node.js', 'SQL', 'MongoDB', 'MERN Stack'],
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

export const COMPILER_LINKS: Record<string, string> = {
  'Universal IDE': 'https://onecompiler.com/embed/?hideLanguageSelection=false&hideHistory=true&theme=dark',
  'C++': 'https://onecompiler.com/embed/cpp?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'C#': 'https://onecompiler.com/embed/csharp?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'Python': 'https://onecompiler.com/embed/python?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'Java': 'https://onecompiler.com/embed/java?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'JavaScript': 'https://onecompiler.com/embed/javascript?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'TypeScript': 'https://onecompiler.com/embed/typescript?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'PHP': 'https://onecompiler.com/embed/php?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'Ruby': 'https://onecompiler.com/embed/ruby?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'Go': 'https://onecompiler.com/embed/go?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'Swift': 'https://onecompiler.com/embed/swift?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'Rust': 'https://onecompiler.com/embed/rust?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'Kotlin': 'https://onecompiler.com/embed/kotlin?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'HTML/CSS/JS': 'https://onecompiler.com/embed/html?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'React': 'https://codesandbox.io/embed/new?codemirror=1&fontsize=14&hidenavigation=1&theme=dark',
  'Node.js': 'https://onecompiler.com/embed/nodejs?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'SQL': 'https://onecompiler.com/embed/mysql?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'MongoDB': 'https://onecompiler.com/embed/mongodb?hideLanguageSelection=true&hideHistory=true&theme=dark',
  'MERN Stack': 'https://codesandbox.io/embed/mern-starter-68y9v?fontsize=14&hidenavigation=1&theme=dark'
};

export const INTERNSHIP_MOCK: Internship[] = [
  { 
    id: 'ril-summer-intern-2026', 
    title: 'Reliance Industries Internship 2026 Details', 
    company: 'Reliance Industries', 
    stipend: 'Competitive (Best in Industry)', 
    duration: 'Summer 2026', 
    location: 'Navi Mumbai', 
    type: 'paid', 
    link: 'https://careers.ril.com/rilcareers/frmJobSearch.aspx?JBTITLE=+7ecS8qBIi14riHtXzlz1w==&jbID=AlX/g4HFieFNnhdpzJoP/A==',
    postedAt: '2026-04-24',
    description: 'Role: Summer Intern\nQualification: MBA\nExperience: 0–3 years (Freshers can apply)\nApplication Deadline: Apply ASAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png'
  },
  { 
    id: 'deloitte-marketing-intern-2026', 
    title: 'Intern – Marketing, Brands & Communications', 
    company: 'Deloitte', 
    stipend: 'Paid Internship', 
    duration: 'Program Duration', 
    location: 'Mumbai (Hybrid)', 
    type: 'paid', 
    link: 'https://www.linkedin.com/jobs/view/4400425279/',
    postedAt: '2026-04-24',
    description: 'Qualification: Graduate degree\nEligible Batches: 2024, 2025, 2026\nExperience: Freshers / Students\nMode: Hybrid',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png'
  },
  { 
    id: 'google-swe-summer-2026', 
    title: 'Google Summer Internship 2026 Details', 
    company: 'Google', 
    stipend: 'Best in industry', 
    duration: 'Summer 2026', 
    location: 'Bengaluru / Hyderabad / Pune', 
    type: 'paid', 
    link: 'https://www.google.com/about/careers/applications/jobs/results/121166815916106438-software-engineering-intern-summer-2026',
    postedAt: '2026-04-23',
    description: 'Role: Software Engineering Intern\nQualification: M.E / M.Tech / MCA / M.S\nExperience: Freshers / Students\nApplication Deadline: Apply as soon as possible',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
  },
  { 
    id: 'harman-advanced-engineer-2026', 
    title: 'Advanced Engineer – Data Engineering & MS Fabric', 
    company: 'Harman', 
    stipend: 'Best in Industry', 
    duration: 'Program Duration', 
    location: 'Bangalore', 
    type: 'paid', 
    link: 'https://jobsearch.harman.com/en_US/careers/ApplicationMethods?jobId=30504',
    postedAt: '2026-04-01',
    description: 'Qualification: B.E/B.Tech/B.Sc\nExperience: Freshers\nLast Date: ASAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Harman_International_logo.svg/1200px-Harman_International_logo.svg.png'
  },
  { 
    id: 'tata-data-visualisation', 
    title: 'Data Visualisation: Empowering Business with Effective Insights', 
    company: 'Tata Group', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Virtual', 
    type: 'unpaid', 
    link: 'https://www.theforage.com/simulations/tata/data-visualisation-p5xo',
    postedAt: '2026-05-02',
    description: 'Gain insights into leveraging data visualisations as a tool for making informed business decisions.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png'
  },
  { 
    id: 'tata-cybersecurity-iam', 
    title: 'Cybersecurity - IAM Developer', 
    company: 'Tata Group', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Virtual', 
    type: 'unpaid', 
    link: 'https://www.theforage.com/simulations/tata/cybersecurity-sbda',
    postedAt: '2026-05-02',
    description: 'Assist the cybersecurity consulting team and become an IAM expert by enhancing TechCorp\'s digital defences.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png'
  },
  { 
    id: 'tata-genai-data-analytics', 
    title: 'GenAI Powered Data Analytics', 
    company: 'Tata Group', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Virtual', 
    type: 'unpaid', 
    link: 'https://www.theforage.com/simulations/tata/data-analytics-t3zr',
    postedAt: '2026-05-02',
    description: 'GenAI-Powered No-Code Analytics to Realize Business Objectives.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png'
  },
  { 
    id: 'amazon-tax-intern-2026', 
    title: 'Tax Intern (Tax Reporting)', 
    company: 'Amazon (ADCI)', 
    stipend: 'Paid Internship', 
    duration: 'Program Duration', 
    location: 'Hyderabad, Bangalore, Pune', 
    type: 'unpaid', 
    link: 'https://www.amazon.jobs/en/jobs/3165346/tax-intern-tax-reporting',
    postedAt: '2026-03-30',
    description: 'Job ID: 3165346\nTeam: Global Direct Tax Reporting & Compliance\nWork Area: Finance, Taxation, Accounting',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
  },
  { 
    id: 'deloitte-cyber-security', 
    title: 'Cyber Security', 
    company: 'Deloitte', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Virtual', 
    type: 'unpaid', 
    link: 'https://www.theforage.com/simulations/Deloitte%20Australia/cyber-c1e3',
    postedAt: '2026-03-28',
    description: 'Work with our cyber team to deliver Deloitte expertise to our clients. 78150+ 5 Star Reviews',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png'
  },
  { 
    id: 'deloitte-data-analytics', 
    title: 'Data Analytics Virtual Internship', 
    company: 'Deloitte', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Virtual', 
    type: 'unpaid', 
    link: 'https://www.theforage.com/simulations/Deloitte%20Australia/data-analytics-s5zy',
    postedAt: '2026-03-28',
    description: 'Gain practical experience in data analytics and visualization with Deloitte Australia.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png'
  },
  { 
    id: 'deloitte-technology', 
    title: 'Technology Virtual Internship', 
    company: 'Deloitte', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Virtual', 
    type: 'unpaid', 
    link: 'https://www.theforage.com/simulations/Deloitte%20Australia/technology-fz0w',
    postedAt: '2026-03-28',
    description: 'Explore the intersection of business and technology with Deloitte Australia.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png'
  },
  { 
    id: 'ge-aerospace-btech-intern', 
    title: 'B.Tech Intern', 
    company: 'GE Aerospace', 
    stipend: 'Paid / Co-op', 
    duration: 'Program Duration', 
    location: 'Bengaluru, Karnātaka, India', 
    type: 'paid', 
    link: 'https://careers.geaerospace.com/global/en/apply?jobSeqNo=GAOGAYGLOBALR5031124EXTERNALENGLOBAL&step=1&stepname=personalInformation',
    postedAt: '2026-03-23',
    description: 'Business Segment: Aviation T&O Integrated Design & Build\nCategory: Engineering / Technology\nJob ID: R5031124\nPosted Date: 03/23/2026\nRelocation Assistance: Yes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1200px-General_Electric_logo.svg.png'
  },
  { 
    id: 'paytm-fellowship', 
    title: 'Paytm X Campus Fellowship Program', 
    company: 'Paytm', 
    stipend: 'Fellowship Benefits', 
    duration: 'Program Duration', 
    location: 'Pan India / Virtual', 
    type: 'paid', 
    link: 'https://unstop.com/workshops-webinars/paytm-x-campus-fellowship-program-paytm-1663937?lb=krHMyqHr&utm_medium=Share&utm_source=workshops&utm_campaign=Ysatyam610',
    postedAt: '2026-03-20',
    description: 'Paytm X Campus Fellowship Program / workshops\n\nEligibility:\nEngineering Students\nPostgraduate\nUndergraduate\nManagement\nArts, Commerce, Sciences & Others',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png'
  },
  { 
    id: 'infosys-springboard-7', 
    title: 'Infosys Springboard Internship 7.0', 
    company: 'Infosys Springboard', 
    stipend: null, 
    duration: '8 Weeks', 
    location: '100% Virtual', 
    type: 'unpaid', 
    link: 'https://surveys.infosysapps.com/r/a/Si41PRd2gAG5',
    postedAt: '2026-05-01',
    description: '🚀 Now Announcing — 7th Edition\nEmpowering Students with Industry-Ready Technology Skills\n\n7 Edition | 8 Weeks | 5 Tech Tracks | 100% Virtual\n🤖 Artificial Intelligence\n⚡ Angular Full Stack\n⚡ Python Technology\n⚡ Java Tech Stack\n⚡ Data Visualization',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png'
  },
  { 
    id: 'wipro-presales-solutions', 
    title: 'Presales & Solutions Design', 
    company: 'Wipro', 
    stipend: '₹ 40,000 - 40,001 /month', 
    duration: '6 Months', 
    location: 'Bangalore', 
    type: 'paid', 
    link: 'https://internshala.com/internship/detail/presales-solutions-design-internship-in-bangalore-at-wipro1772638351',
    postedAt: '2026-03-25',
    description: 'Starts immediately\nLast date: 3 Apr\' 26',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png'
  },
  { 
    id: 'microsoft-data-science', 
    title: 'Data Science Internship', 
    company: 'Microsoft', 
    stipend: 'Industry Standard', 
    duration: 'Program Duration', 
    location: 'Pan India / Virtual', 
    type: 'paid', 
    link: 'https://apply.careers.microsoft.com/careers/job?pid=1970393556625290&utm_source=Data_Science_Internship_unstop&utm_medium=listing&utm_campaign=unstop',
    postedAt: '2026-03-10',
    description: 'Eligibility:\nEngineering Students\nPostgraduate\nUndergraduate',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png'
  },
  { 
    id: 'cisco-virtual-internship-2026', 
    title: 'Cisco Virtual Internship 2026', 
    company: 'AICTE - Cisco', 
    stipend: 'Certificate', 
    duration: '2 Months', 
    location: 'Fully Online', 
    type: 'aicte', 
    link: 'https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzc0NDIwNjY0NjljMzgyYjg3MTU3Yw==&level=NA==',
    postedAt: '2026-05-01',
    description: 'Domains: Networking, Cybersecurity, Artificial Intelligence\nDuration: 2 months (8 weeks)\nMode: Fully online (work from home)\nStipend: No stipend (skill-focused program)\nApplication Deadline: June 25, 2026',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
    expiresAt: '2026-06-25T23:59:59Z'
  },
  { 
    id: 'ibm-ai-virtual-internship-2026', 
    title: 'IBM AI Virtual Internship 2026', 
    company: 'AICTE - IBM', 
    stipend: 'Certificate', 
    duration: '4 to 6 Weeks', 
    location: '100% Online', 
    type: 'aicte', 
    link: 'https://internship.aicte-india.org/internship-details.php?uid=SU5URVJOU0hJUF8xNzc1NDkwMDIwNjlkM2QzZTRmMzkwMw==&level=NA==',
    postedAt: '2026-05-01',
    description: 'Duration: 4 to 6 weeks\nMode: 100% Online (accessible across India)\nFocus Areas: Artificial Intelligence (AI), Machine Learning (ML), IBM Cloud\nApplication Deadline: 30 June 2026\nStart Date: July 2026',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png',
    expiresAt: '2026-06-30T23:59:59Z'
  },
];

export const JOBS_MOCK: Job[] = [
  {
    id: 'capgemini-software-engineer-2026',
    title: 'Software Engineer',
    company: 'Capgemini',
    postedAt: '2026-05-05',
    applicants: 'Be the first to apply',
    location: 'Chennai',
    description: 'Capgemini Careers Jobs 2026 Details\nRole: Software Engineer\nCategory: IT Jobs\nQualification: B.E / B.Tech\nExperience: Minimum 1 year\nSalary: Best in the industry\nLocation: Chennai\nApplication Deadline: Apply as soon as possible',
    link: 'https://careers.capgemini.com/job/Chennai-%28ex-Madras%29-Software-Engineer/1389746933/?feedId=388933&utm_source=LinkedInJobPostings',
    type: 'IT Jobs'
  },
  {
    id: 'infosys-sp-dse-2026',
    title: 'Specialist Programmer / Digital Specialist Engineer (2026 Batch)',
    company: 'Infosys',
    postedAt: '2026-05-05',
    applicants: 'Be the first to apply',
    location: 'Across India',
    description: 'Infosys Hiring for 2026 Batch Details\nJob Role: Specialist Programmer / Digital Specialist Engineer\nCategory: Off-Campus Hiring\nEligibility: B.E / B.Tech / M.E / M.Tech / MCA / MSc\nBatch: 2026\nExperience: Freshers\nSalary: ₹6.25 LPA – ₹21 LPA\nLocation: Across India\nLast Date: Apply as soon as possible',
    link: 'https://surveys.infosysapps.com/r/a/SPOffCampusregistration_apr26',
    type: 'Off-Campus Hiring'
  },
  {
    id: 'cognizant-backoffice-helpdesk-2026',
    title: 'Backoffice Helpdesk - 2026 Details',
    company: 'Cognizant',
    postedAt: '2026-04-23',
    applicants: 'Be the first to apply',
    location: 'Coimbatore, India',
    description: 'Cognizant Off Campus Jobs 2026 Details:\nRole: Backoffice Helpdesk\nQualification: Any Degree\nExperience: Experienced candidates preferred\nSalary: Competitive, as per industry standards\nApplication Deadline: Apply at the earliest',
    link: 'https://careers.cognizant.com/global-en/jobs/00067912312/tl-cx-backoffice-helpdesk/',
    type: 'Off-Campus Drive'
  },
  {
    id: 'microsoft-data-center-tech-2026',
    title: 'Data Center Technician - 2026 Overview',
    company: 'Microsoft',
    postedAt: '2026-04-23',
    applicants: 'Be the first to apply',
    location: 'Hyderabad, India',
    description: 'Microsoft Hiring 2026 Details:\nRole: Data Center Technician\nCategory: IT Jobs\nQualification: 12th / GED\nExperience: Experienced candidates preferred\nSalary: Best in the industry\nApplication Deadline: Apply ASAP',
    link: 'https://apply.careers.microsoft.com/careers/job/1970393556858834',
    type: 'IT Jobs'
  },
  {
    id: 'cisco-software-engineer-2026',
    title: 'Software Engineer - 2026 (Hybrid) Details',
    company: 'Cisco',
    postedAt: '2026-04-23',
    applicants: 'Be the first to apply',
    location: 'Bangalore, India',
    description: 'Cisco Recruitment 2026 (Hybrid) Details:\nRole: Software Engineer\nCategory: IT Jobs\nQualification: B.E / B.Tech / M.E / M.Tech\nExperience Required: 1 to 3 years\nSalary: Best in the industry\nApplication Deadline: Apply as soon as possible',
    link: 'https://careers.cisco.com/global/en/job/CISCISGLOBAL2009087EXTERNALENGLOBAL/Software-Embedded-Software-Developer',
    type: 'IT Jobs'
  },
  {
    id: 'idfc-first-bank-associate-ds-2026',
    title: 'Associate Data Scientist - 2026 Overview',
    company: 'IDFC FIRST Bank',
    postedAt: '2026-04-23',
    applicants: 'Be the first to apply',
    location: 'Mumbai, India',
    description: 'IDFC FIRST Bank Hiring 2026 Details:\nJob Role: Associate Data Scientist\nQualification: B.E/B.Tech/B.Sc/M.E/M.Tech/M.Sc/BCA/MCA\nExperience: 2–3 Years\nSalary: Competitive (as per industry standards)\nApplication Deadline: Apply as soon as possible',
    link: 'https://careers.idfcfirstbank.com/in/en/job/IFBAINP201678ENIN?utm_source=linkedin&utm_medium=jobboard',
    type: 'Full Time'
  },
  {
    id: 'ibm-associate-developer-2026',
    title: 'Associate Developer - 2026 Batch',
    company: 'IBM',
    postedAt: '2026-04-23',
    applicants: 'Be the first to apply',
    location: 'Hyderabad, India',
    description: 'IBM Off-Campus Hiring 2026 Details:\nJob Role: Associate Developer\nQualification: B.E / B.Tech\nBatch: 2026\nExperience: Freshers & Experienced candidates can apply\nSalary: Best in the industry\nLast Date to Apply: ASAP',
    link: 'https://www.foundit.in/seeker-profile/single-page-registration?jobid=145834033&spl=IN_paid_display_direct_acq_affiliate_Asterix_FO2011_Multiple_Apr25&utm_source=Asterix&utm_medium=affiliate&utm_campaign=IN_paid_display_direct_acq_affiliate_Asterix_FO2011_Multiple_Apr25',
    type: 'Off-Campus Hiring'
  },
  {
    id: 'tata-capital-customer-service-2026',
    title: 'Customer Service Executive',
    company: 'Tata Capital',
    postedAt: '2026-04-19',
    applicants: 'Be the first to apply',
    location: 'Chennai, India',
    description: 'Tata Capital Off Campus Drive 2026 Details:\nRole: Customer Service Executive\nCategory: Off-Campus Drive\nQualification: Any Graduate\nBatch: 2024 / 2025 / 2026\nExperience: Freshers (Relevant experience in vehicle sales is a plus)\nSalary: Not disclosed\nLocation: Chennai',
    link: 'https://www.naukri.com/job-listings-customer-service-executive-tata-capital-ltd-chennai-0-to-2-years-160426505028?src=cluster&sid=17766008097734692_3&xp=5&px=1',
    type: 'Off-Campus Drive'
  },
  {
    id: 'infosys-off-campus-2026-updated',
    title: 'Specialist Programmer / Digital Specialist Engineer',
    company: 'Infosys',
    postedAt: '2026-04-19',
    applicants: 'Be the first to apply',
    location: 'Across India',
    description: 'Infosys Off Campus Recruitment 2026 Details\nRole: Specialist Programmer / Digital Specialist Engineer\nCategory: Off-Campus Drive\nQualification: B.E/B.Tech/M.E/M.Tech/MCA/MSc\nBatch: 2024 & 2025\nExperience: Freshers\nSalary: ₹6.25 LPA – ₹21 LPA\nLocation: Across India\nLast Date to Apply: 19 April 2026',
    link: 'https://surveys.infosysapps.com/r/a/InfosysDSESPoffcampus',
    type: 'Off-Campus Drive',
    expiresAt: '2026-04-20T00:01:00Z'
  },
  {
    id: 'hcltech-service-desk-analyst-2026',
    title: 'Service Desk Analyst',
    company: 'HCLTech',
    postedAt: '2026-04-19',
    applicants: 'Be the first to apply',
    location: 'Lucknow, India',
    description: 'HCLTech Off Campus Recruitment 2026 Overview\nRole: Service Desk Analyst\nCategory: Off-Campus Drive\nQualification: Any Degree\nExperience: 6 months to 3+ years\nSalary: Competitive (as per industry standards)\nLocation: Lucknow\nApplication Deadline: Apply as soon as possible',
    link: 'https://www.linkedin.com/jobs/view/4399535085/',
    type: 'Full Time'
  },
  {
    id: 'deloitte-conflicts-check-analyst-2026',
    title: 'Analyst – Conflicts Check – Risk & Brand Protection',
    company: 'Deloitte',
    postedAt: '2026-04-19',
    applicants: 'Be the first to apply',
    location: 'Hyderabad, India',
    description: 'Deloitte Recruitment 2026 Details\nJob Role: Analyst – Conflicts Check – Risk & Brand Protection\nCategory: Discover more, Business advisory services, Microsoft Office suite training, IT Jobs\nQualification: MBA/PGDM\nExperience Required: 2 – 3 Years\nJob Location: Hyderabad\nSalary Package: Best in Industry\nApplication Deadline: Apply ASAP',
    link: 'https://usijobs.deloitte.com/en_US/careersUSI/JobDetail/USI-EH26-Enabling-Areas-R-BP-Canada-Conflicts-Checks-Analyst/301041',
    type: 'Full Time'
  },
  {
    id: 'accenture-it-customer-service-rep-2026',
    title: 'IT Customer Service Representative',
    company: 'Accenture',
    postedAt: '2026-04-17',
    applicants: 'Be the first to apply',
    location: 'Coimbatore, India',
    description: 'Accenture Recruitment 2026 Details\nRole: IT Customer Service Representative\nCategory: IT Jobs\nQualification: Any Degree\nExperience: 0 – 2 Years\nSalary: Best in Industry\nLast Date to Apply: Apply ASAP',
    link: 'https://www.accenture.com/in-en/careers/jobdetails?id=14154433_en',
    type: 'Full Time'
  },
  {
    id: 'philips-software-technologist-1-2026',
    title: 'Software Technologist I',
    company: 'Philips',
    postedAt: '2026-04-17',
    applicants: 'Be the first to apply',
    location: 'Bangalore, India',
    description: 'Philips Recruitment 2026 Details\nRole: Software Technologist I\nCategory: IT Jobs\nQualification: B.E / B.Tech / B.Sc\nExperience: Freshers\nSalary: Best in Industry\nLast Date: 20 April 2026',
    link: 'https://philips.wd3.myworkdayjobs.com/jobs-and-careers/job/Bangalore/Software-Technologist-I_579945/',
    type: 'Full Time'
  },
  {
    id: 'tata-technologies-diploma-engineer-trainee-2026',
    title: 'Diploma Engineer Trainee',
    company: 'Tata Technologies',
    postedAt: '2026-04-17',
    applicants: 'Be the first to apply',
    location: 'Pune, India',
    description: 'Tata Technologies Recruitment 2026 Details\nRole: Diploma Engineer Trainee\nCategory: Engineering Jobs\nQualification: Diploma in Mechanical / ECE / CS / IT / EEE / Related Streams\nBatch: 2024 / 2025 / 2026\nExperience: Freshers / 0–1 Year\nSalary: ₹3 – 4 LPA (Approx.)\nLast Date: Apply As Soon As Possible',
    link: 'https://tatatechnologies.ripplehire.com/candidate/?token=GpmL7GmyLc1DoGB7gulO&lang=en&source=LINKEDIN&ref=LI02#detail',
    type: 'Full Time'
  },
  {
    id: 'accenture-application-support-engineer-2026',
    title: 'Application Support Engineer',
    company: 'Accenture',
    postedAt: '2026-04-05',
    applicants: 'Be the first to apply',
    location: 'Mumbai, India',
    description: 'Accenture Offering for Freshers 2026 Details\nRole: Application Support Engineer\nCategory: IT Jobs\nQualification: B.E/B.Tech (CS, AI, Data Science, or related fields)\nExperience: 0 – 3 Years\nSalary: Best in industry\nLast Date: Apply as soon as possible',
    link: 'https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5490966-S2002787_en&src=LINKEDINJP',
    type: 'Full Time'
  },
  {
    id: 'idfc-first-bank-model-risk-analyst-2026',
    title: 'Model Risk Analyst',
    company: 'IDFC First Bank',
    postedAt: '2026-04-05',
    applicants: 'Be the first to apply',
    location: 'Mumbai, India',
    description: 'IDFC First Bank Recruitment 2026 Details\nRole: Model Risk Analyst\nQualification: Master’s Degree\nBatch: 2023/2024\nExperience: Freshers\nSalary: Best in Industry\nLast Date: ASAP',
    link: 'https://careers.idfcfirstbank.com/in/en/job/IFBAINP205914ENIN',
    type: 'Full Time'
  },
  {
    id: 'deloitte-associate-analyst-2026',
    title: 'Associate Analyst / Analyst',
    company: 'Deloitte',
    postedAt: '2026-04-04',
    applicants: 'Be the first to apply',
    location: 'Hyderabad, India',
    description: 'Deloitte Announced Recruitment 2026 Details\nRole: Associate Analyst / Analyst\nCategory: Off-Campus Drive\nQualification: MBA/PGDM / B.Com / BBA\nBatch: 2024 & 2025\nExperience: 0 – 2 Years\nSalary: Best in industry\nLast Date: Apply as soon as possible',
    link: 'https://usijobs.deloitte.com/en_US/careersUSI/JobDetail/USI-EH26-EA-GPS-SSC-Associate-Analyst-Analyst/328660',
    type: 'Full Time'
  },
  {
    id: 'ge-hc-get',
    title: 'Graduate Engineer Trainee',
    company: 'GE HealthCare',
    postedAt: '2026-03-20',
    applicants: 'Over 300 applicants',
    location: 'Bengaluru, India',
    description: 'Ensure an uninterrupted supply of materials to support production and sales. Work to resolve materials issues while achieving and maintaining inventory business metrics. Roles: Material ordering, scheduling, Oracle expert, inventory accuracy, rescheduling, root cause investigation.',
    link: 'https://www.foundit.in/seeker-profile/single-page-registration?jobid=143011155&spl=IN_paid_display_direct_acq_affiliate_Asterix_FO2011_Multiple_Apr25&utm_source=Asterix&utm_medium=affiliate&utm_campaign=IN_paid_display_direct_acq_affiliate_Asterix_FO2011_Multiple_Apr25',
    type: 'Permanent Job'
  },
  {
    id: 'hpe-software-engineer-1',
    title: 'Systems/Software Engineer I',
    company: 'HPE (Hewlett Packard Enterprise)',
    postedAt: '2026-03-26',
    applicants: 'Be the first to apply',
    location: 'Bangalore, India (Hybrid)',
    description: 'HPE Off Campus Recruitment 2026 Details\nRole: Systems/Software Engineer I\nCategory: IT Jobs\nQualification: B.E / B.Tech / B.Sc / M.E / M.Tech / M.Sc\nExperience: 0 – 2 Years\nSalary: As per industry standards\nWork Mode: Hybrid (approx. 2 days/week in office)\nLast Date: Apply at the earliest\n\nEligibility Criteria:\n- Hold a Bachelor’s or Master’s degree in Computer Science, Information Systems, or a related field\n- Have 0 to 2 years of experience (freshers are eligible)',
    link: 'https://careers.hpe.com/us/en/job/1204760/Systems-Software-Engineer-I-Entry-Level',
    type: 'Full Time'
  },
  {
    id: 'wipro-cyber-security-analyst',
    title: 'Cyber Security Analyst',
    company: 'Wipro',
    postedAt: '2026-03-26',
    applicants: 'Be the first to apply',
    location: 'Bengaluru, India',
    description: 'Wipro Hiring Jobs 2026 Details:\nRole: Cyber Security Analyst\nCategory: IT Jobs\nQualification: B.E / B.Tech\nExperience: Freshers\nSalary: As per industry standards\nJob Location: Bengaluru\nLast Date: Apply at the earliest\n\nEligibility Criteria:\n- Have a B.E / B.Tech degree\n- Possess knowledge of Trend Micro Antivirus – Deep Security (mandatory skill)\n\nKey Responsibilities:\nAs a Cyber Security Analyst at Wipro, you will be responsible for Security Monitoring & Analysis',
    link: 'https://careers.wipro.com/job/Bengaluru-CYBER-SECURITY-ANALYST-L1-IND-560035/151190-en_US/',
    type: 'Full Time'
  },
  {
    id: 'genpact-backend-java',
    title: 'Technical Associate – Backend Developer (Java)',
    company: 'Genpact',
    postedAt: '2026-03-26',
    applicants: 'Be the first to apply',
    location: 'India',
    description: 'Genpact Job Recruitment 2026 Details\nRole: Technical Associate – Backend Developer (Java)\nQualification: B.E / B.Tech / MCA / M.Tech\n\nEligibility Criteria:\n- Have a degree in Computer Science, IT, or a related field\n- Maintain at least 60% or equivalent CGPA throughout academics\n- Have no active backlogs\n- Possess good problem-solving and communication skills',
    link: 'https://genpact.taleo.net/careersection/application.jss?lang=en&type=1&csNo=10460&portal=44100025334&reqNo=1681077&isOnLogoutPage=true&state=RELAY_STATE%3Dde1afd51-74c5-4a55-936f-e0248c2fd198%26RETURN_TO_URL%3Dhttps%3A%2F%2Fgenpact.taleo.net%2Fcareersection%2Fapplication.jss%3Flang%3Den%26type%3D1%26csNo%3D10460%26portal%3D44100025334%26reqNo%3D1681077%26isOnLogoutPage%3Dtrue&iss=https%3A%2F%2Faccounts.google.com&code=4%2F0Aci98E8ms8fPkWRxeenoYky7c3KrRvmq4kvJdTu_xUFRCJRsMAdiHBFa76LSUQVpWdQHWA&scope=email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent',
    type: 'Full Time'
  },
  {
    id: 'accenture-llm-fullstack',
    title: 'LLM Full Stack Engineer',
    company: 'Accenture',
    postedAt: '2026-03-26',
    applicants: 'Be the first to apply',
    location: 'Bengaluru, India',
    description: 'Accenture Hiring Freshers 2026 Details\nRole: LLM Full Stack Engineer\nCategory: IT Jobs\nQualification: B.E / B.Tech\nExperience: 0 – 2 Years\nSalary: As per industry standards\nLast Date: Apply at the earliest',
    link: 'https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5451335-S2003960_en',
    type: 'Full Time'
  },
  {
    id: 'reliance-get-2026',
    title: 'Graduate Engineer Trainee (GET)',
    company: 'Reliance Industries',
    postedAt: '2026-03-26',
    applicants: 'Be the first to apply',
    location: 'Across India',
    description: 'Reliance Industries Hiring 2026 Details\nRole: Graduate Engineer Trainee (GET)\nCategory: Off-Campus Drive\nQualification: B.E / B.Tech\nBatch: 2026 (and other eligible batches)\nExperience: 0 – 5 Years\nSalary: As per industry standards\nLast Date: 29 March 2026',
    link: 'https://unstop.com/jobs/reliance-industries-all-india-hiring-freshers-and-1-5-years-of-experience-reliance-industries-limited-ril-1660783?utm_source=Jobs&utm_medium=Affiliates&utm_campaign=trackier_2386&click_id=69c55e1274e49d03580e2436&ref=AffFreshersopening',
    type: 'Full Time'
  },
  {
    id: 'cognizant-analyst-trainee-2026',
    title: 'Analyst Trainee',
    company: 'Cognizant',
    postedAt: '2026-03-27',
    applicants: 'Be the first to apply',
    location: 'India',
    description: 'Cognizant fresher hiring for Analyst Trainee (Three-year full-time degree: 2024 or 2025 graduates)\nJob Function(s): Customer/Technical Support, Information Technology\nSalary: Detailed upon advancement\nApplication Deadline: 31 March 2026 11:59 PM',
    link: 'https://app.joinsuperset.com/join/#/signup/student/jobprofiles/65ac431a-2d60-417a-b1f6-6b0f455a1d33',
    type: 'Full Time'
  }
];

export const EXAMS_MOCK = [
  { 
    id: 'aws-cloud-practitioner', 
    title: 'AWS Certified Cloud Practitioner', 
    date: 'Ongoing / Self-Scheduled', 
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    description: 'The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology. This is a good starting point on the AWS Certification journey for individuals with no prior IT or cloud experience switching to a cloud career or for line-of-business employees looking for foundational cloud literacy.',
    company: 'Amazon'
  },
  { 
    id: 'aws-ml-engineer-associate', 
    title: 'AWS Certified Machine Learning Engineer - Associate', 
    date: 'Ongoing / Self-Scheduled', 
    link: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/',
    description: 'AWS Certified Machine Learning Engineer - Associate validates technical ability in implementing ML workloads in production and operationalizing them. Boost your career profile and credibility, and position yourself for in-demand machine learning job roles.',
    company: 'Amazon'
  },
  { 
    id: 'oracle-sunbird-ed', 
    title: 'Become Oracle Cloud Infrastructure for Sunbird ED Specialty Certified', 
    date: 'Ongoing / Self-Scheduled', 
    link: 'https://mylearn.oracle.com/ou/learning-path/become-oracle-cloud-infrastructure-for-sunbird-ed-specialty-certified/127531',
    description: 'This learning path is designed to help you prepare for the Oracle Cloud Infrastructure for Sunbird ED Specialty certification. It covers foundational cloud concepts and specific implementations for Sunbird ED.',
    company: 'Oracle'
  },
];

export const CERTIFICATIONS_MOCK: Internship[] = [
  { 
    id: 'udemy-python-beginners-2026', 
    title: 'Python Free Online Course For Beginners | Enroll Now and Get Certified', 
    company: 'Udemy', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://www.udemy.com/course/python-for-every1/?sharedid=&irpid=2050810&utm_medium=affiliate&utm_source=impact&utm_audience=mx&utm_tactic=%22Content%22%2C%22India%22&utm_content=3193860&utm_campaign=2050810&irgwc=1&afsrc=1&im_ref=VfL1XnwuQxyZWUtwSYz2v2C2UkuU0Uy400000w0',
    postedAt: '2026-05-05',
    description: 'Enroll in this free Python course for beginners on Udemy and get certified upon completion. Learn the essentials of Python programming.',
    logo: 'https://www.udemy.com/static/images/brand/logo-udemy.svg'
  },
  { 
    id: 'microsoft-devops-course-2026', 
    title: 'Microsoft Free DevOps Course 2026 | Learn Azure DevOps & GitHub with Certification', 
    company: 'Microsoft', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://learn.microsoft.com/en-us/training/modules/introduction-to-devops/',
    postedAt: '2026-05-05',
    description: 'Learn the fundamentals of DevOps with Azure and GitHub through this free course by Microsoft. Get certified upon completion.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png'
  },
  { 
    id: 'microsoft-ai-for-everyone-beginner', 
    title: 'Unlocking AI for Everyone (Beginner)', 
    company: 'Microsoft', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://www.skillindiadigital.gov.in/courses/detail/658a7e4d-dadd-4922-8f22-9593b904f690',
    postedAt: '2026-04-24',
    description: 'A beginner-friendly course by Microsoft designed to help everyone understand the fundamentals of Artificial Intelligence and its applications. Join over 7,000+ learners.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png'
  },
  { 
    id: 'skill-india-resume-writing-tips', 
    title: 'Skill India Digital Hub Resume Writing Tips Course', 
    company: 'Skill India Digital', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://www.skillindiadigital.gov.in/courses/detail/0374a5b0-7f63-4274-b18b-cad5cab79663',
    postedAt: '2026-04-24',
    description: 'Resume Writing Tips: Free Online Learning for Better Job Applications. This course provides essential tips and strategies for creating effective resumes that stand out to employers.',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Skill_India_logo.svg/1200px-Skill_India_logo.svg.png'
  },
  { 
    id: 'stock-market-foundation-skill-india', 
    title: 'Stock Market Foundation Course', 
    company: 'Skill India Digital (ASSETGRO FINTECH)', 
    stipend: 'Free', 
    duration: '2 Hours', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://www.skillindiadigital.gov.in/courses/detail/58f5e455-4212-4c27-9db6-afcf1902895a',
    postedAt: '2026-04-03',
    description: 'Category: Banking, Financial Services & Insurance (BFSI)\nEnrolled: 7269+ students\n\nBy completing this course, learners will grasp essential stock market concepts, interpret financial statements, analyze stocks using fundamental and technical tools, and understand derivatives like options and futures. They will be equipped with the foundational knowledge needed to start their investment journey with confidence.',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Skill_India_logo.svg/1200px-Skill_India_logo.svg.png'
  },
  { 
    id: 'ibm-gen-ai-intro', 
    title: 'Getting Started with Generative AI (Earn a digital credential!)', 
    company: 'IBM SkillsBuild', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://skills.yourlearning.ibm.com/activity/PLAN-BAEFCCAAD520?_gl=1*lqyo4w*_ga*NDY3ODg2Ni4xNzc1MTMwMjM2*_ga_FYECCCS21D*czE3NzUxMzAyMzUkbzEkZzEkdDE3NzUxMzAzMzckajU1JGwwJGgw',
    postedAt: '2026-04-02',
    description: 'Master the basics of Generative AI and earn a digital credential from IBM SkillsBuild.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png'
  },
  { 
    id: 'chatgpt-productivity-specialization', 
    title: 'ChatGPT: Master Free AI Tools to Supercharge Productivity Specialization', 
    company: 'Coursera', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://www.coursera.org/specializations/chatgpt-free-ai-tools-to-excel',
    postedAt: '2026-03-28',
    description: 'Learn to leverage ChatGPT and free AI tools to enhance productivity and excel in your tasks.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-logo_v2.svg/1200px-Coursera-logo_v2.svg.png'
  },
  { 
    id: 'aws-solutions-architect-intro', 
    title: 'AWS Certified Solutions Architect Associate Introduction', 
    company: 'Udemy', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-in-30-days/',
    postedAt: '2026-03-28',
    description: 'Master the fundamentals of AWS and prepare for the Solutions Architect Associate certification with this comprehensive introductory course.',
    logo: 'https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg'
  },
  { 
    id: 'learn-salesforce-easy-steps', 
    title: 'Learn Salesforce in easy steps and get certified!', 
    company: 'Udemy', 
    stipend: 'Free', 
    duration: 'Self-Paced', 
    location: 'Online', 
    type: 'unpaid', 
    link: 'https://www.udemy.com/course/learn-salesforce-in-easy-steps-and-get-certified/',
    postedAt: '2026-03-28',
    description: 'Master Salesforce fundamentals with this easy-to-follow course and prepare for your certification.',
    logo: 'https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg'
  }
];

export const HACKATHONS_MOCK = [];
