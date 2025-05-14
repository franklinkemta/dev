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
      </main>
    </Layout>
  );
}
