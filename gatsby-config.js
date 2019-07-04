module.exports = {
  siteMetadata: {
    title: `Moviex App`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gemcave`,
    keywords:
      "react, courses, learn, gemcave, python, repl, lisp, c++, swift, c, design, code",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "hao8kuac",
        dataset: "my-app",
        token:
          "skl2URJF5j8SvvGIjPFi6YhPOw86LMRwYDs83qDZ3XE4ygWlMngFYHDyIADk3tR7m4Wt2sHUOUxYFIyJjdaVsYAWu4f7gQiJcktAbkab0UV1LHk6VIc1keAgjJ6QTC3mFqCaPTi8zoYWw9vZAxWiizW2vdtwv53B64bKx3gctIbPMTHNELjZ",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// skl2URJF5j8SvvGIjPFi6YhPOw86LMRwYDs83qDZ3XE4ygWlMngFYHDyIADk3tR7m4Wt2sHUOUxYFIyJjdaVsYAWu4f7gQiJcktAbkab0UV1LHk6VIc1keAgjJ6QTC3mFqCaPTi8zoYWw9vZAxWiizW2vdtwv53B64bKx3gctIbPMTHNELjZ
// {
// 	resolve: "gatsby-source-contentful",
// 	options: {
// 		spaceId: "bxgd2cofa27z",
// 		accessToken: "KD_eP3dSm5ZDkMNSijMhkH0fGbloG9X06siBTuA2jqw",
// 	},
// },
