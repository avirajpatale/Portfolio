import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJquery,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiWordpress,
  SiSanity,
  SiHubspot,
  SiDocker,
  SiNginx,
  SiGit,
  SiGitlab,
  SiGithub,
  SiPostman,
  SiWhatsapp,
} from 'react-icons/si';
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaServer,
  FaExchangeAlt,
  FaCreditCard,
  FaCode,
  FaDatabase,
  FaTools,
  FaCloudUploadAlt,
  FaCogs,
  FaSitemap,
  FaFileAlt,
  FaSearch,
  FaLink,
} from 'react-icons/fa';
import { FiLayers, FiMail } from 'react-icons/fi';

export const personalInfo = {
  name: 'Avinash Bharat Patale',
  shortName: 'Avinash Patale',
  initials: 'AP',
  roles: ['Frontend Developer', 'Full-Stack Developer'],
  experience: '3+ Years',
  location: 'Pune, India',
  email: 'avinashpatale10@gmail.com',
  phone: '+91 7028335457',
  phoneRaw: '+917028335457',
  resumeUrl: '/Avinash_Patale_Resume.pdf',
  intro:
    'I build responsive, scalable web applications with React.js, JavaScript, Node.js, PHP and Laravel — from pixel-perfect interfaces to REST APIs and production deployments.',
};

// Update these URLs with your real profile links.
export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/avinash-patale', icon: FaLinkedinIn },
  { label: 'GitHub', url: 'https://github.com/avirajpatale', icon: FaGithub },
  { label: 'Email', url: 'mailto:avinashpatale10@gmail.com', icon: FaEnvelope },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  heading: 'Crafting scalable web experiences',
  paragraphs: [
    "I'm a developer with 3+ years of experience building responsive, scalable web applications — from modern React.js frontends to REST API integrations, database management and production deployments.",
    "I enjoy owning features end-to-end: designing clean interfaces, wiring them to reliable backend services, optimizing data flows, and shipping them behind Docker and Nginx. Alongside application development, I also handle website development and technical SEO — sitemaps, schema markup, indexing fixes and performance improvements.",
    'I care about clean code, thoughtful debugging, and products that feel fast and effortless to use.',
  ],
  highlights: [
    {
      icon: FaCode,
      title: 'Frontend Development',
      text: 'Responsive, component-driven interfaces built with React.js, JavaScript, HTML5 and CSS3.',
    },
    {
      icon: FaServer,
      title: 'API & Backend',
      text: 'REST API development and integration across Node.js, PHP and Laravel services.',
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      text: 'Schema design and optimization with MongoDB and MySQL, plus Redis caching.',
    },
    {
      icon: FaTools,
      title: 'Debugging & Problem Solving',
      text: 'Tracing issues across the stack and shipping reliable fixes to production.',
    },
    {
      icon: FaSitemap,
      title: 'Website Development',
      text: 'End-to-end website builds with React.js, PHP and WordPress for real clients.',
    },
    {
      icon: FaSearch,
      title: 'Technical SEO',
      text: 'Audits, schema/JSON-LD, sitemaps, indexing fixes and performance improvements.',
    },
  ],
};

export const skillCategories = [
  {
    title: 'Frontend',
    icon: FaCode,
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'jQuery', icon: SiJquery },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
    ],
  },
  {
    title: 'Database & Caching',
    icon: FaDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    title: 'CMS & Platforms',
    icon: FiLayers,
    skills: [
      { name: 'WordPress', icon: SiWordpress },
      { name: 'Sanity.io', icon: SiSanity },
      { name: 'HubSpot', icon: SiHubspot },
    ],
  },
  {
    title: 'API & Integrations',
    icon: FaExchangeAlt,
    skills: [
      { name: 'REST APIs', icon: FaExchangeAlt },
      { name: 'AJAX', icon: FaCogs },
      { name: 'WhatsApp API', icon: SiWhatsapp },
      { name: 'Email Services', icon: FiMail },
      { name: 'Payment Gateways', icon: FaCreditCard },
    ],
  },
  {
    title: 'DevOps & Hosting',
    icon: FaCloudUploadAlt,
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Docker Compose', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Hostinger', icon: FaCloudUploadAlt },
      { name: 'FTP', icon: FaFileAlt },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitLab', icon: SiGitlab },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
    ],
  },
];

export const experience = [
  {
    company: 'Globeminds Technology Pvt. Ltd.',
    role: 'Software Developer',
    period: 'April 2024 – Present',
    current: true,
    summary:
      'Building and maintaining scalable web applications — React.js frontends, REST API integrations, booking and payment workflows, and production deployments.',
  },
  {
    company: 'AmpleLogic',
    role: 'Software Developer',
    period: 'October 2023 – February 2024',
    current: false,
    summary:
      'Developed responsive web interfaces and worked on frontend development and API integration for enterprise applications.',
  },
];

export const projects = [
  {
    title: 'Live101',
    tagline: 'Microservices-based booking platform',
    status: 'Live',
    featured: true,
    icon: FaCogs,
    description:
      'Scalable microservices-based booking platform supporting enquiry management, artist management, bookings, payments, events, notifications, and administrative workflows.',
    responsibilities: [
      'React.js admin and user-facing applications',
      'REST API development and integration',
      'Booking and payment workflows',
      'MongoDB schema optimization',
      'WhatsApp, Email, and third-party API integrations',
      'Redis caching',
      'Docker and Nginx',
      'Debugging and production deployment',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Redis',
      'REST APIs',
      'WhatsApp API',
      'Docker',
      'Nginx',
    ],
    links: [
      { label: 'Website', url: 'https://www.live101.in/' },
      { label: 'Admin', url: 'https://liveadmin.live101.in/' },
    ],
  },
  {
    title: 'Swett Booking System',
    tagline: 'Booking management system',
    status: 'Under Development',
    featured: true,
    icon: FaCreditCard,
    description:
      'Booking management system for bookings, payments, events, and administrative operations.',
    responsibilities: [
      'Responsive booking interfaces',
      'Booking and payment workflows',
      'PHP API integration',
      'MySQL data management',
      'API testing and debugging',
    ],
    technologies: ['React.js', 'PHP', 'MySQL', 'REST APIs', 'Postman'],
    links: [],
  },
  {
    title: 'Client Website Management & SEO',
    tagline: 'Technical SEO for enterprise clients',
    status: 'Ongoing',
    featured: false,
    icon: FaSearch,
    clients: ['Tata Communications', 'Bedrock Data', 'EMA', 'Accounting Seed'],
    description:
      'Ongoing website management and technical SEO for enterprise clients across their marketing properties.',
    responsibilities: [
      'Blog management and content optimization',
      'Technical SEO audits',
      'Sitemap and robots.txt optimization',
      'Indexing and redirect issue fixes',
      'Schema and JSON-LD implementation',
      'Meta titles and descriptions',
      'Internal linking and website performance improvements',
    ],
    technologies: ['Technical SEO', 'Schema / JSON-LD', 'WordPress', 'Content Optimization'],
    links: [],
  },
  {
    title: 'Website Development Projects',
    tagline: 'Client website builds & maintenance',
    status: 'Delivered',
    featured: false,
    icon: FaLink,
    clients: ['Shashikant Dhotre Art Classes', 'Swett', 'PrismaDot Technologies'],
    description:
      'Responsive website development and ongoing maintenance for client businesses.',
    responsibilities: [
      'Responsive website development',
      'React.js, JavaScript, PHP, and WordPress',
      'API and form integration',
      'Website maintenance and bug fixing',
      'Performance and SEO optimization',
    ],
    technologies: ['React.js', 'JavaScript', 'PHP', 'WordPress', 'REST APIs'],
    links: [],
  },
];

export const education = [
  {
    degree: 'PG-CDAC in Advanced Computing',
    institution: 'IACSD, Akurdi, Pune',
    year: '2022',
  },
  {
    degree: 'Bachelor of Engineering',
    institution: 'Solapur University',
    year: '2019',
  },
];

export const contactInfo = [
  { label: 'Email', value: 'avinashpatale10@gmail.com', href: 'mailto:avinashpatale10@gmail.com' },
  { label: 'Phone', value: '+91 7028335457', href: 'tel:+917028335457' },
  { label: 'Location', value: 'Pune, India', href: null },
];
