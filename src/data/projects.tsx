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
        // link: 'https://github.com/consultantzero/fst-signal',
        link: "img/projects/fib.png",
        title: 'Fibonacci Signal Trader',
        img: 'img/projects/fib.png',
        description: (
            <>
                Built a dual-language tool for automated trading signal analysis using Fibonacci retracement and RSI/MACD, enhancing stock and crypto market trend detection.
            </>
        ),
        skills: ['Node.js', 'Python', 'TypeScript', 'AWS', 'Docker'],
        old: false,
    },
    {
        link: 'https://github.com/consultantzero/crypto_tax',
        title: 'Crypto Tax Calculator',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Developed a universal CSV-based tool to automate cryptocurrency tax calculations, streamlining transaction imports and reporting.
            </>
        ),
        skills: ['Python', 'TypeScript', 'AWS', 'Docker', 'React'],
        old: false,
    },
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
        title: 'Real-Time Damage Inspection App',
        img: 'img/projects/placeholder.jpg',
        description: (
            <>
                Developed real-time inspection features for MonkApp, cutting inspection time by 75%.
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