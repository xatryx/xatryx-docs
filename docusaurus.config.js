/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Xatryx',
  tagline: 'Team #0073',
  url: 'https://docs-xatryx-com.onrender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xatryx', // Usually your GitHub org/user name.
  projectName: 'xatryx-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Xatryx Developer',
      logo: {
        alt: 'Xatryx Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentations',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/xatryx',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/xatryx',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/xatryx',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xatryx Developer. 
      Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // Debug defaults to true in dev, false in prod
        debug: undefined,
        docs: {
          sidebarPath: require.resolve('./sidebars.jsx'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/xatryx/xatryx-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/xatryx/xatryx-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
