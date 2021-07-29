const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Green Deeds',
  tagline: 'Empower nature to be self sustainable',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'green-deeds', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Green Deeds',
      logo: {
        alt: '🌳 Green Deeds Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/trees', label: 'Trees', position: 'right' },
        { to: '/carbon', label: 'Carbon', position: 'right' },
        { to: '/blog', label: 'Blog', position: 'right' },
        { to: '/about', label: 'About', position: 'right' },
        {
          type: 'doc',
          docId: 'welcome',
          position: 'right',
          label: 'Documenation',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Green Deeds',
          items: [
            { to: '/', label: 'Home' },
            { to: '/trees', label: 'Trees' },
            { to: '/carbon', label: 'Carbon' },
            { to: '/blog', label: 'Blog' },
            { to: '/about', label: 'About' },
            {
              label: 'Documenation',
              to: '/docs/welcome',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
