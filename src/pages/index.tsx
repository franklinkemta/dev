import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import WelcomeHeader from '@site/src/components/Welcome/Header';
import WelcomeFeatures from '@site/src/components/Welcome/Features';



export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Meet with Franklin Kemta <head />">
      <WelcomeHeader />
      <main>
        <WelcomeFeatures />
      </main>
    </Layout>
  );
}
