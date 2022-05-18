module.exports = {
    siteMetadata: {
      title: `Paul Chaperon`,
      description: `Étudiant à Sorbonne Université et développeur indépendant,
                    je me définis comme un passionné d'informatique.
                    Les services que je propose : développement, design, création numérique.`,
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