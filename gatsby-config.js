/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    description: 'Cassandra Smith\'s Portfolio Site'   
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
            name: `Sofia Sans 700`,
            file: `https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@700&display=swap`,
          },  
          {
            name: `Gloria Hallelujah`,
            file: `https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap`,
          },
        ],
      },
    },
  ],
}
