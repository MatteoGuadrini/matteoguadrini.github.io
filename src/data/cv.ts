export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    contact: Contact;
    work: Work[];
    education: Education[];
    skills: string[];
}

export interface Contact {
    email: string,
    tel: string,
    social: Social[];
}

export interface Social {
    name: string;
    url: string;
}

export interface Work {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
    achievements?: string[];
    badges?: string[];
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string | null;
}

export const CV_DATA: CV = {
    name: "Matteo Guadrini",
    title: "DevOps Engineer && Python/Rust Developer",
    location: "Milan, Italy",
    locationLink: "https://www.google.com/maps/place/Milan%20Italy",
    about: "DevOps Engineer with background in Python and Rust development",
    summary: `I'm a DevOps Engineer with a strong background in Python and Rust development. I'm passionate about building scalable and reliable systems.`,
    personalWebsiteUrl: "https://matteoguadrini.github.io/life_of_code/",
    contact: {
        email: "matteo.guadrini@hotmail.it",
        tel: "",
        social: [
            { name: "GitHub", url: "https://github.com/matteoguadrini" },
            { name: "LinkedIn", url: "https://linkedin.com/in/matteo-guadrini" },
        ],
    },
    work: [
        {
            company: "Banca Mediolanum S.p.A.",
            link: "https://www.linkedin.com/company/banca-mediolanum/",
            title: "Senior DevOps Engineer",
            start: "January 2026",
            end: "Present",
            description: "Lead DevOps Engineer responsible for designing and implementing scalable services architecture for banking applications.",
            achievements: [
                "Engineer scalable microservices with Openshift and Kubernetes to support high-traffic banking applications.",
                "Implement CI/CD pipelines using Jenkins and GitLab CI for automated testing and deployment.",
                "Develop and maintain containerized applications using Docker.",
                "Manage pipelines and infrastructure as code using Terraform and Ansible.",
                "Monitor system performance and health using Grafana and OpenSearch to ensure high availability."
            ],
            badges: ["Kubernetes", "Openshift", "Docker", "Terraform", "Ansible", "Jenkins", "GitLab CI", "Grafana", "OpenSearch"],
        },
        {
            company: "Banca Widiba S.p.A.",
            link: "https://www.linkedin.com/company/banca-widiba/",
            title: "System Administrator and DevOps Engineer",
            start: "January 2018",
            end: "December 2025",
            description: "System administrator and DevOps engineer responsible for maintaining and optimizing the organization's IT infrastructure.",
            achievements: [
                "Developed and maintained scalable software solutions in Python.",
                "Installed, configured, and maintained Linux servers and services to ensure optimal performance and security.",
                "Managed CI/CD pipelines for automated testing and deployment.",
                "Monitored system performance and health using CheckMK and Wazuh to ensure high availability.",
            ],
            badges: ["Python", "Linux", "CI/CD", "REST", "APIs", "Docker", "Ansible", "Wazuh"],
        },
        {
            company: "Dechit S.p.A.",
            link: "https://www.linkedin.com/company/dechitspa",
            title: "IT System Specialist",
            start: "July 2013",
            end: "December 2017",
            description: `Managed as IT System Specialist the company's IT infrastructure, including servers, networks, and security systems. Implemented and maintained software solutions to support business operations.`,
            achievements: [
                "Developed and maintained software solutions in Python to support business operations.",
                "Installed, configured, and maintained Linux servers and services to ensure optimal performance and security.",
                "Managed LDAP and Active Directory services for user authentication and authorization.",
            ],
            badges: ["Python", "Linux", "Windows", "REST", "APIs", "Docker"],
        },
        {
            company: "Opera21 S.p.A.",
            link: "https://www.linkedin.com/company/opera21",
            title: "IT System Specialist",
            start: "January 2009",
            end: "June 2013",
            description: `Managed as IT System Specialist the company's IT infrastructure, including servers, networks, and security systems. Implemented and maintained software solutions to support business operations.`,
            achievements: [
                "Installed, configured, and maintained Linux servers and services to ensure optimal performance and security.",
                "Managed LDAP and Active Directory services for user authentication and authorization.",
                "System integration through open source technologies.",
            ],
            badges: ["Python", "Linux", "Windows", "REST", "APIs", "Docker"],
        },
        {
            company: "R.I.E. s.r.l.",
            link: "https://www.linkedin.com/company/rie-srl",
            title: "Network and Electric Technician",
            start: "January 2008",
            end: "December 2008",
            description: `Managed as Network and Electric Technician the company's IT infrastructure, including servers, networks, and security systems.`,
            achievements: [
                "Installed, configured, and managed network devices, from the cable to the switch.",
                "Installed and configured civil and industrial electrical systems.",
                "Drew with CAD of wiring diagrams of cabins.",
            ],
            badges: ["Network", "Electrical", "CAD"],
        }
    ],
    education: [
        {
            school: "CE.S.R.A. A. Volta, Codogno",
            degree: "Software Engineering Technician",
            start: "2006",
            end: "2007",
        },
        {
            school: "I.T.I.S. A. Volta, Lodi",
            degree: "Electronics and Information Technology Technician",
            start: "2001",
            end: "2006",
        },
    ],
    skills: [
        "Python", "Rust", "Go", "Linux", "Windows", "REST", "APIs", "Docker", "Ansible", "Wazuh", "Kubernetes", "Openshift", "Jenkins", "GitLab CI", "Grafana", "OpenSearch", "Jenkins", "Astro", "Openshift", "Kubernetes",
    ],
};