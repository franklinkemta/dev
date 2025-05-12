import clsx from 'clsx';
import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

function HeroSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('flex justify-center w-full bg-base-300', styles.heroBanner)}>
            <div className="flex flex-col items-start text-left lg:w-5/6 lg:px-28">
                <h3 className="text-3xl w-full">
                    {siteConfig.tagline}
                </h3>
                <p className="text-lg">
                    Learn and follow me along my amazing journey in the technical world of Cloud Computing, AI, and Software Engineering,
                    For any inquiries, <span className="bg-gray-300 px-1"> Please reach out! </span>
                </p>
                <div className="flex gap-1">
                    <Link
                        className="btn btn-primary btn-lg rounded-3xl"
                        to="https://www.linkedin.com/in/franklinkemta/">
                        View Linkedin
                    </Link>
                    <Link
                        className="btn btn-ghost btn-lg rounded-3xl"
                        to="https://www.github.com/franklinkemta/">
                        View Github
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default HeroSection;