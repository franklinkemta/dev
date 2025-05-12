import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import { ProjectList } from '@site/src/data/projects';

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
            className="card bg-base-100 shadow-sm border-2 border-gray-400 hover:border-primary hover:opacity-85 hover:cursor-pointer w-full max-w-full"
        >
            <figure className="w-full aspect-[4/3] m-0 p-0">
                <img
                    className="w-full h-full object-cover object-center"
                    src={img}
                    alt={title}
                    loading="lazy"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg">{title}</h2>
                <p className="text-sm">{description}</p>
                <div className="flex flex-wrap gap-1">
                    {skills?.map((s) => (
                        <div key={s} className="badge badge-outline badge-primary badge-sm px-2 py-1 mr-1 mb-1">
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
            <main className="flex flex-col w-full p-4 sm:p-8">
                <h3 className="text-lg font-medium w-full mb-4">Recent Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {ProjectList.filter((p) => !p.old).map((p) => (
                        <Project key={p.title} {...p} />
                    ))}
                </div>
                <div className="divider my-4"></div>
                <h3 className="text-lg font-medium w-full mb-4">Other Projects (Old)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {ProjectList.filter((p) => p.old).map((p) => (
                        <Project key={p.title} {...p} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}