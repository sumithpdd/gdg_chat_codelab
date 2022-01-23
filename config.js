const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://gdg-chat-codelab.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://developers.google.com/community/gdg/images/logo-lockup-gdg-horizontal-full.png',
    logoLink: 'https://gdg-chat-codelab.netlify.app/',
    title:
      "Flutter Code Lab",
    githubUrl: 'https://github.com/sumithpdd/gdg_chat_codelab',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/sumithpdd" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above    
    ],
    links: [{ text: 'Sumith Damodaran', link: 'https://Sumithpd.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://developers.google.com/community/gdg'>GDG</a><div class='greenCircle'></div>",
  },
  siteMetadata: {
    title: 'GDG Chat app codelab | Sumith Damodaran',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/sumithpdd/gdg_chat_codelab',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GDG Chat app codelab',
      short_name: 'GDGChatAppCodelab',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
