/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/volunteer-club-in-tanger",
  siteMetadata: {
    title: `نادي سفراء متطوع`,
    description: `               نادي متطوعي طنجة هو نادي ينشط أساسا في مساعدة الجمعيات في الاعمال التطوعية، حل مشاكل الإجتماعية ، القيام بأنشطة مختلفة تستهدف فئات معينة ، جلب متبرعين بالمال للنادي للمساعدات الإنسانية، مساعدات التنظيمات سواء متل حفلات او مهراجانات او تظاهرة كروية ، والكتير من الأنشطة الأخرى `,
    author: `@soufian5907`,
    siteUrl: `https://about.fairfieldprogramming.org`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: false,
        sitemap: 'https://about.fairfieldprogramming.org/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fairfield Programming Association`,
        short_name: `fpa`,
        start_url: `/`,
        background_color: `#0F006C`,
        theme_color: `#0F006C`,
        display: `minimal-ui`,
        icon: `src/res/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "Home",
          crumbSeparator: " /",
        },
      }
    },
  ],
}
