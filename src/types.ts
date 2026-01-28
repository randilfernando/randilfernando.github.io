export interface Service {
    title: string;
    description: string;
}

export interface Work {
    name: string;
    description: string;
}

export interface Contact {
    linkedin?: string;
}

export interface Profile {
    name: string;
    headline: string;
    valueStatement: string;
    bio: string;
    email: string;
    contact: Contact;
    credibility: string[];
    services: Service[];
    selectedWork: Work[];
    about: string;
}

export interface Post {
    id: number;
    name: string;
    summary: string;
    image: string;
    area: string;
    link: string;
}
