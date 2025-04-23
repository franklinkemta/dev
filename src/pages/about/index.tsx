import type { ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function Test(): ReactNode {
    return (
        <Layout
            title={`About`}
            description="Description will go into a meta tag in <head />">
            <main>
                <p>About</p>
            </main>
        </Layout>
    );
}
