import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/Welcome/HeroSection';
import WelcomeFeatures from '@site/src/components/Welcome/Features';



export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="<head> Welcome to my developer page <head />"
    >
      <main className="w-full h-full">
        <HeroSection />
        <WelcomeFeatures />
      </main>
    </Layout>
  );
}
