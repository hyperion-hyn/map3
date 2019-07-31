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
    caption: 'titan',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/users/titan-logo.png',
    infoLink: 'https://play.google.com/store/apps/details?id=org.hyn.titan',
    pinned: true,
  },
];

const contents = [
    {
        caption: 'OpenStreetMap',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: '/img/contents/Openstreetmap_logo.svg',
        infoLink: 'https://wiki.osmfoundation.org/wiki/Main_Page',
        pinned: true,
    },
    {
        caption: 'Mapillary',
        image: '/img/contents/Mapillary_logo.svg',
        infoLink: 'https://www.mapillary.com/',
        pinned: true,
    },
    {
        caption: 'NASA Earth Data',
        image: '/img/contents/NASA_logo.svg',
        infoLink: 'https://earthdata.nasa.gov/',
        pinned: true,
    },
];

const siteConfig = {
  title: 'Map3', // Title for your website.
  tagline: 'Decentralized Map Network.',
  url: 'https://www.map3.network/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'map3',
  organizationName: 'hyperion-hyn',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'what-is', label: 'About'},
    {doc: 'install', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: false, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,
  contents,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#6C6B74',
    secondaryColor: '#4F1D7C',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Hyperion`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/hyperion-hyn/map3',
};

module.exports = siteConfig;
