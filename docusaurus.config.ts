import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.js";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Welcome',
  tagline: 'Hey! I\'m Franklin. A Cloud DevOps and Software Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dev.franklinkemta.com',
  customFields: {
    cname: 'dev.franklinkemta.com',
  },
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'dev', // Usually your repo name.
  organizationName: 'franklinkemta', // Usually your GitHub org/user name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: {
    faster: true, v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  plugins: [
    ['./plugins/tailwind-config.js', {}]
  ],

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: '#',
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        gtag: { // <--- Add your gtag configuration here!
          trackingID: 'G-X6K74R8XBD',
          anonymizeIP: false,
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   editUrl: '#',
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
      } satisfies Preset.Options,
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    // Replace with your project's social card
    image: 'img/dev-social-card.jpg',
    navbar: {
      hideOnScroll: true,
      title: 'Welcome',
      logo: {
        alt: 'Welcome Logo',
        src: 'img/logo.svg',
        className: 'ml-3 rounded-full border-2 border-primary',
      },
      items: [
        { to: '/', label: 'About me', position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        // { to: '/certifications', label: 'Certifications', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        // { to: '/resume', label: '📃 Resume', position: 'right' },
        { href: 'https://linkedin.com/in/franklinkemta', label: 'Contact', position: 'right' },
        {
          href: 'https://github.com/franklinkemta',
          label: '☯︎ GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
      ],
      copyright: `Franklin © ${new Date().getFullYear()}`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
