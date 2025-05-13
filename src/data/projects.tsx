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
        link: '/projects/llm-workflow',
        title: 'LLM Knowledge Indexing Workflow',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Built a Q/A workflow using LLMs with RAG and Faiss, enhancing knowledge retrieval efficiency.
            </>
        ),
        skills: ['Azure AI', 'AWS Bedrock', 'Python', 'Faiss'],
    },
    {
        link: '/projects/edge-ai-migration',
        title: 'Edge AI Inference Migration',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Migrated ML inference to edge GPU devices, cutting latency and GCP costs by 90%.
            </>
        ),
        skills: ['PyTorch', 'GCP', 'Terraform', 'Ansible', 'Docker'],
    },
    {
        link: '/projects/automated-deployment',
        title: 'Automated Cloud Deployment',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Automated AWS/GCP deployments with Terraform, reducing deployment time to minutes.
            </>
        ),
        skills: ['AWS EC2', 'GCP', 'Terraform', 'Ansible', 'Docker'],
    },
    {
        link: '/projects/damage-inspection-app',
        title: 'Vehicle Damage Inspection',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Built a Vehicle inspection app, using Computer Vision for automated damage inspection process.
            </>
        ),
        skills: ['React Native', 'TypeScript', 'Node.js', 'CircleCI'],
        old: true,
    },
    {
        link: 'https://viize.ca/',
        title: 'Computer Vision CI/CD Pipeline',
        img: 'img/projects/traffic.jpg',
        description: (
            <>
                Set up CI/CD for AI microservices, halving RAM usage for video processing.
            </>
        ),
        skills: ['AWS ECS', 'FastAPI', 'PyTorch', 'Ansible'],
        old: true,
    },
    {
        link: 'https://drive.google.com/file/d/1dy_2kxsBhMi5EKa8fJJatS0Z7RUea7OS/view',
        title: 'Previous Web Development projects',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Previous Web Development projects using other stacks
            </>
        ),
        skills: ['Vue.JS', 'Laravel PHP', 'Firebase', 'etc..'],
        old: true,
    },
];