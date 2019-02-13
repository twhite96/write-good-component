/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/new_logo.svg',
    infoLink: 'http://github.com/twhite96/write-good-component',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Write Good Component', // Title for your website.
  tagline: 'A simple reusable component for your React apps.',
  url: 'https://writegoodcomp-docs.netlify.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'write-good-component-docs',
  organizationName: 'Tiffany R. White',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {doc: 'doc3', label: 'Usage'},
    {href: 'https://github.com/twhite96/write-good-component/issues', label: 'GitHub'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/new_logo.svg',
  footerIcon: 'img/new_logo.svg',
  favicon: 'img/favicon.png',
  /* Colors for website */
  colors: {
    primaryColor: '#06D7D9',
    secondaryColor: '#FFAFFA',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Roboto",
      "Sans Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Tiffany White`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atelier-dune-dark',
  },

  usePrism: ['jsx'],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/tiffany_white_blog.png',
  twitterImage: 'img/tiffany_white_blog.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  repoUrl: 'https://github.com/twhite96/write-good-component',
  twitter: 'true',
  twitterUsername: 'TiffanyW_412',
  scrollToTop: true,
};

module.exports = siteConfig;
