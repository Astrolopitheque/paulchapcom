module.exports = {
    siteMetadata: {
      title: `PaulChap.com`,
      siteUrl: `https://www.paulchap.com`,
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'src/images/favicon.png',
        },
      },
    ]
}