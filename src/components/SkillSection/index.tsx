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
        AWS (preferred), Azure, GCP
      </>
    ),
  },
  {
    title: 'Full Stack Development',
    description: (
      <>
        <code>Python</code>, <code>C# .NET</code>, <code>Node.Js</code>, <code>React</code> and <code>TypeScript</code>
      </>
    ),
  },
  {
    title: 'AI DevOps',
    description: (
      <>
        LLM, AI Agent, Computer Vision, Image/Video Processing
      </>
    ),
  },
];

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
    <section className="flex flex-col w-full h-full md:w-4/6 lg:w-4/6 p-4">
      <div className="flex w-full flex-1 col-span-full">
        <h3 >I work in</h3>
      </div>
      <div className="divider my-2"></div>
      <div className="flex w-full flex-col md:flex-row lg:flex-row h-full gap-6">
        {SkillList.map((props, idx) => (
          <Skill key={idx} {...props} />
        ))}
      </div>
      <div className="divider my-2"></div>
      <div className="flex w-full flex-1 col-span-full">
        <h3 className="text-md font-medium" >I've built several projects using these skills</h3>
      </div>
    </section>
  );
}
