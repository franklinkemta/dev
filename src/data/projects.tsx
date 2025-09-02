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
        link: 'https://pypi.org/project/codeindexer/',
        title: 'CodeIndexer PIP Package',
        img: 'img/projects/codeindexer.png',
        description: (
            <>
                A lightweight CLI to index a codebase and create a context-ready prompt file
            </>
        ),
        skills: ['Codebase', 'Indexing', 'LLMs', 'Context', 'Prompt engineering', 'Productivity'],
    },
    {
        link: 'https://github.com/franklinkemta/oneclick-image-downloader-extension',
        title: 'OneClick Image Downloader',
        img: 'https://raw.githubusercontent.com/franklinkemta/oneclick-image-downloader-extension/refs/heads/main/assets/usage-img-1.gif',
        description: (
            <>
                A Chrome extension to download images with one click, saving time on image dataset creation.
            </>
        ),
        skills: ['Images', 'Dataset', 'Annotation', 'Data sourcing', 'Chrome Extension'],
    },
    {
        link: 'https://viize.ca/',
        title: 'AI Platform Engineering (WIP)',
        img: 'img/projects/viize.webp',
        description: (
            <>
                Automated AI/ML DevOps Training, Inference and Optimization, SDKs OpenAI, Azure AI/Foundry, AWS Bedrock, Google AI studio
            </>
        ),
        skills: ['AI Agents', 'SDKs', 'LLMs', 'Gen AI', 'Platforms', 'Kubernetes', 'Orchestration'],
    },
    {
        link: 'https://buttertech.ca',
        title: 'Cloud to Edge Migration, DevOps, GPU Cost, Scaling AI pipelines',
        img: 'img/projects/traffic.jpg',
        description: (
            <>
                Automating AWS/GCP CI/CD, and Migrating GPU heavy pipelines to Hybrid, Scalable and Cost effective Infrastructure with Edge devices
            </>
        ),
        skills: ['AI', 'DevOps', 'Automation', 'AWS', 'GCP', 'IaC', 'Terrafrom', 'Edge GPU'],
    },
    {
        link: 'img/projects/mon-k.png',
        title: 'Vehicle Damage Inspection, Annotation and Reporting',
        img: 'img/projects/mon-k.png',
        description: (
            <>
                Built a vehicle inspection app, integrated backend APIs for AI assisted vehicle damage inspection
            </>
        ),
        skills: ['Computer vision', 'API', 'Full Stack', 'Startup', 'Team', 'Mobile Native', 'OCR'],
        old: false,
    },
    {
        link: 'https://traffic.buttertech.ca/',
        title: 'Multi-streams processing in realtime using Computer vision',
        img: 'img/projects/traffic-2.png',
        description: (
            <>
                Designed and developed a product platform for videos and cameras streams analytics
            </>
        ),
        skills: ['AWS', 'GCP', 'Edge devices', 'IoT', 'Streams processing', 'AI', 'Vision'],
        old: false,
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
        skills: ['Startup', '.NET Framework', 'C#', 'Vue.JS', 'Laravel PHP', 'Firebase', '...'],
        old: true,
    },
];