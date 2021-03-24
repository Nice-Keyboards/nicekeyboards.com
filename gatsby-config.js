module.exports = {
  siteMetadata: {
    title: "Nice Keyboards",
    siteUrl: "https://nicekeyboards.com",
    description: "Cutting edge wireless mechanical keyboard solutions",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-WEV7JRSTJ5", "GTM-WWVZNPW"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nice Keyboards",
        short_name: "Nice Keyboards",
        start_url: "/",
        background_color: "#1A202C",
        theme_color: "#0BC5EA",
        display: "browser",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/docs-layout.tsx"),
        },
        plugins: [
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              background: "rgba(26, 32, 44, 0.7)",
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              backgroundColor: "transparent",
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-medium-zoom`,
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
  ],
};
