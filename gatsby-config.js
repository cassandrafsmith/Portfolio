/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap`,
          },
          {
            name: `Pompiere`,
            file: `https://fonts.googleapis.com/css2?family=Pompiere&display=swap`,
          },
          {
            name: `Life Savers`,
            file: `https://fonts.googleapis.com/css2?family=Life+Savers&display=swap`,
          }, 
          {
            name: `Material Icons`,
            file: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0`,
          }  
        ],
      },
    },
  ],
}
