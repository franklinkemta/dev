import type { ReactNode } from 'react';
import Layout from '@theme/Layout';

type ProjectItem = {
    link: string,
    img: string,
    title: string;
    description: ReactNode;
    old?: boolean;
};

const ProjectList: ProjectItem[] = [
    {
        link: '#',
        title: 'Resume project 1',
        img: "https://dev.franklinkemta.com/images/projects/devops/cloud_to_edge_devOps_migration.jpg",
        description: (
            <>
                I recently build ....
            </>
        ),
    },

];


export const Project = ({ title, description, img, link, old }: ProjectItem) => {
    return (
        <a href={link} className="card card-md h-80 bg-base-100 shadow-sm border-2 border-gray-400 hover:border-primary hover:opacity-85 hover:cursor-pointer">
            <figure className="p-0 object-cover">
                <img
                    className=""
                    src={img}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </a>
    )
}

export default function Projects(): ReactNode {
    return (
        <Layout
            title={`Projects`}
            description="<head> Description will go into a meta tag in <head />">
            <main className="flex flex-col w-full p-8">
                <h3 className="text-lg font-medium w-full"> Recent projects</h3>
                <div className="grid grid-cols-4 gap-4 w-full">
                    {ProjectList.map((p) => (
                        <Project key={p.title} {...p} />
                    ))}
                </div>
                <div className="divider my-2"></div>

                <h3 className="text-lg font-medium"> Other projects (old)</h3>
            </main>
        </Layout>
    );
}
