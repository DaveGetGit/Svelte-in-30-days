// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ---------- Custom Fields
  // See: https://docusaurus.io/docs/deployment#using-environment-variables
  customFields: {},

  // ---------- Site Metadata
  // See: https://docusaurus.io/docs/configuration
  title: "#30DaysOfSvelte",
  tagline: "A Month Of Learning By Doing!",
  favicon: "img/favicon.ico",
  url: "https://30DaysOf.github.io/",
  baseUrl: "/Svelte/",

  // ---------- Deployment Configurations
  // See: https://docusaurus.io/docs/deployment
  projectName: "Svelte",
  organizationName: "30DaysOf",
  deploymentBranch: "gh-pages",

  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",

  // --------- Localization Configuration
  // See: https://docusaurus.io/docs/api/docusaurus-config#i18n
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // ---------- Plugin Configurations
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  // ---------- Theme Configurations
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/site-social-card.jpg",

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        }
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "#30DaysOfSvelte",
        logo: {
          alt: "Svelte Logo",
          src: "img/logo/logo-blue.svg",
          target: '_self',
          width: 32,
          height: 32,
        },
        items: [
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
          {
            to: "/landing",
            label: "About",
            position: "right",
          },
          /* {
            type: "doc",
            position: "left",
            label: "Tutorials",
            docId: 'svelte/intro'
          }, */
          {
            href: 'https://github.com/30DaysOf/Svelte',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: "dark",
        links: [ ],
        logo: {
          alt: 'Svelte Logo',
          src: 'img/logo/logo-blue.svg',
          href: 'https://30DaysOf.github.io/svelte',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Nitya Narasimhan | Built with Docusaurus.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),

  // Preset Configurations
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: true,
          routeBasePath: '/',
        },
        blog: {
          path: 'blog',          // directory path
          routeBasePath: 'blog', // URL route
          blogTitle: 'Learning Svelte',
          blogDescription: 'Blog posts documenting my Svelte Learning Journey',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent Posts',
          postsPerPage: 7,
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
};

module.exports = config;
