import type { ReactNode } from 'react';

type SkillItem = {
  title: string;
  description: ReactNode;
};

const SkillList: SkillItem[] = [
  {
    title: 'Cloud Platform Engineering',
    description: (
      <>
        AWS (preferred), Azure, GCP, IaC, CI/CD, Automation
      </>
    ),
  },
  {
    title: 'AI DevOps',
    description: (
      <>
        Computer Vision, LLM, AI Agents, Image/Video Processing
      </>
    ),
  },

];

const SecondarySkillList: SkillItem[] = [
  {
    title: 'I\'ve worked on several Full Stack development projects using',
    description: (
      <>
        <code>Python</code>, <code>C# .NET</code>, <code>Node.Js</code>, <code>React</code> and <code>TypeScript</code>
      </>
    ),
  },
]

function Skill({ title, description }: SkillItem) {
  return (
    <div className="w-full">
      <div className="text-start">
        <h3 className="font-medium">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function SkillSection(): ReactNode {
  return (
    <section className="flex flex-col w-full h-full items-center md:w-4/6 lg:w-4/6 p-4">
      <div className="flex w-full">
        <h3 >I work in</h3>
      </div>
      <div className="divider my-1"></div>
      <div className="flex w-full flex-col md:flex-row lg:flex-row h-full gap-6">
        {SkillList.map((props, idx) => (
          <Skill key={idx} {...props} />
        ))}
      </div>
      <div className="divider my-2"></div>
      <div className="flex w-full flex-1 col-span-full">
        {SecondarySkillList.map((props, idx) => (
          <Skill key={idx} {...props} />
        ))}
      </div>
      <div className="flex flex-col w-full items-center">
        <a href="/projects" className="btn btn-lg btn-outline no-underline border-2 border-primary rounded-3xl">
          View projects
        </a>
      </div>
    </section>
  );
}
