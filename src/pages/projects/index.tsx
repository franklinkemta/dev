import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import { ProjectList } from './projects';

type ProjectItem = {
    link: string;
    img: string;
    title: string;
    description: ReactNode;
    old?: boolean;
    skills?: string[];
};

export const Project = ({ title, description, img, link, old, skills }: ProjectItem) => {
    return (
        <a
            href={link}
            className="card card-md min-h-80 bg-base-100 shadow-sm border-2 border-gray-400 hover:border-primary hover:opacity-85 hover:cursor-pointer"
        >
            <figure className="min-h-60 object-cover">
                <img className="" src={img} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="w-full gap-2">
                    {skills?.map((s) => (
                        <div key={s} className="badge badge-outline badge-primary badge-md mr-1 mb-1 p-1">
                            {s}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default function Projects(): ReactNode {
    return (
        <Layout
            title="Projects"
            description="Showcasing my work in cloud, AI, and DevOps for innovative solutions."
        >
            <main className="flex flex-col w-full p-8">
                <h3 className="text-lg font-medium w-full">Recent Projects</h3>
                <div className="grid grid-cols-4 gap-4 w-full">
                    {ProjectList.filter((p) => !p.old).map((p) => (
                        <Project key={p.title} {...p} />
                    ))}
                </div>
                <div className="divider my-2"></div>
                <h3 className="text-lg font-medium">Other Projects (Old)</h3>
                <div className="grid grid-cols-4 gap-4 w-full">
                    {ProjectList.filter((p) => p.old).map((p) => (
                        <Project key={p.title} {...p} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}
