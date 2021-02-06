module.exports = {
  siteMetadata: {
    title: "Nice Keyboards",
    siteUrl: "https://www.nicekeyboards.com",
    description: "Cutting edge wireless mechanical keyboard solutions",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-WEV7JRSTJ5"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              backgroundColor: "transparent",
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              background: "rgba(26, 32, 44, 0.5)",
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
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              background: "rgba(26, 32, 44, 0.5)",
            },
          },
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
  ],
};
