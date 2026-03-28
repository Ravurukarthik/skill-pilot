
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
  Code
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
  { type: ModuleType.CODING_SESSION, icon: <Code className="w-8 h-8 text-emerald-500" />, description: "Access all coding compilers and IDEs in one place." }
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
  'Coding Compilers & IDE': ['Universal IDE', 'C', 'C++', 'C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'Ruby', 'Go', 'Swift', 'Rust', 'Kotlin', 'HTML/CSS/JS', 'React', 'Node.js', 'SQL', 'MongoDB', 'MERN Stack'],
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
  'C': 'https://onecompiler.com/embed/c?hideLanguageSelection=true&hideHistory=true&theme=dark',
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
    postedAt: '2026-03-15',
    description: '🚀 Now Announcing — 7th Edition\nEmpowering Students with Industry-Ready Technology Skills\n\n7 Edition | 8 Weeks | 5 Tech Tracks | 100% Virtual\n🤖 Artificial Intelligence\n⚡ Angular Full Stack\n🐍 Python Technology\n☕ Java Tech Stack\n📊 Data Visualization',
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
];

export const JOBS_MOCK: Job[] = [
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

export const CERTIFICATIONS_MOCK: Internship[] = [
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
