// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Charticulator',
  tagline: 'Open source version of visual',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zbritva.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/charticulator-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zbritva', // Usually your GitHub org/user name.
  projectName: 'charticulator-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Charticulator',
        logo: {
          alt: 'Charticulator logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            label: 'Blog',
            href: 'https://ilfat-galiev.im/',
            position: 'left'
          },
          {
            href: 'https://github.com/zBritva/charticulator-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/groups/12540722/',
              },
              {
                label: 'Charticulator app',
                href: 'https://ilfat-galiev.im/charticulator'
              },
              {
                label: 'Charticulator original web site',
                href: 'https://charticulator.com/'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Charticulator sources',
                href: 'https://github.com/zBritva/charticulator',
              },
              {
                label: 'Visual sources',
                href: 'https://github.com/zBritva/charticulator-visual-community',
              },
              {
                label: 'Ilfat Galiev',
                href: 'https://ilfat-galiev.im/'
              },
              {
                label: 'Charticulator (original) sources',
                href: 'https://github.com/microsoft/charticulator',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Charticulator Conmmunity version, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
