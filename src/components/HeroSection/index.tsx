import clsx from 'clsx';
import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

function HeroSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('flex justify-center w-full bg-base-300', styles.heroBanner)}>
            <div className="grid grid-cols-12 w-full items-center wrap-normal">
                <div className="col-span-12 md:col-span-8 lg:col-span-8 flex w-full items-center flex-col px-2">
                    <h3 className="text-3xl w-full">
                        {/* {siteConfig.tagline} */}
                        Hi! I'm Franklin
                    </h3>
                    <p className="text-lg w-full">
                        I'm a Cloud Engineer and Software Developer <br />
                    </p>
                    <div className="w-full flex gap-2 justify-center">
                        <Link
                            className="btn btn-primary btn-lg rounded-3xl"
                            to="https://www.linkedin.com/in/franklinkemta/">
                            View Linkedin
                        </Link>
                        <Link
                            className="btn btn-outline btn-lg rounded-3xl"
                            to="https://www.github.com/franklinkemta/">
                            View Github
                        </Link>
                    </div>
                    <div className="tooltip tooltip-warning w-full flex justify-center mt-6" data-tip="🔥💻💨">
                        <span className="rounded-full text-6xl bg-gray-200 p-2">☕️</span>
                    </div>
                </div>
                <div className="hidden lg:block md:block">
                    <a className="tooltip flex w-full hover:animate-pulse" href="https://github.com/franklinkemta/" target="_blank" data-tip="Chat with Me">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 min-w-60 rounded-full ring-2 ring-offset-2">
                                <img src="img/logo.svg" />
                            </div>
                        </div>
                    </a>
                </div>
            </div >
        </header >
    );
}

export default HeroSection;