import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import SkillSection from '@site/src/components/SkillSection';


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="<head> Welcome to website | Learn and grow together <head />"
    >
      <main className="flex flex-col h-full w-full items-center">
        <HeroSection />
        <SkillSection />
        <div className="flex flex-col w-full items-center -mt-3">
          <a href="/dev/projects" className="btn btn-lg btn-outline border-2 border-primary rounded-3xl">
            View projects
          </a>
        </div>
      </main>
    </Layout>
  );
}
