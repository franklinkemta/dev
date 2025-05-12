import type { ReactNode } from 'react';

type ProjectItem = {
    link: string;
    img: string;
    title: string;
    description: ReactNode;
    old?: boolean;
    skills?: string[];
};

export const ProjectList: ProjectItem[] = [
    {
        link: '/projects/cloud-pipeline',
        title: 'Cloud CI/CD Pipeline',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Developed a CI/CD pipeline for cloud deployments, cutting release time by 50%.
            </>
        ),
        skills: ['AWS EC2', 'Jenkins', 'Docker'],
    },
    {
        link: '/projects/ai-chatbot',
        title: 'AI Chatbot Deployment',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Deployed an LLM-based chatbot, improving customer response time by 40%.
            </>
        ),
        skills: ['Azure AI', 'Python', 'LLM'],
    },
    {
        link: '/projects/kubernetes-orchestration',
        title: 'Kubernetes Orchestration',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Orchestrated microservices with Kubernetes, ensuring 99.9% uptime.
            </>
        ),
        skills: ['Kubernetes', 'AWS EKS', 'Terraform'],
    },
    {
        link: '/projects/legacy-migration',
        title: 'Legacy System Migration',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Migrated legacy systems to cloud, reducing costs by 30%.
            </>
        ),
        skills: ['AWS RDS', 'Python', 'MySQL'],
        old: true,
    },
];