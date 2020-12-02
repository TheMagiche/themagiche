// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'Themagiche',
    siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',
    transformers: {
      //Add markdown support to all file-system sources
      remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        anchorClassName: 'icon icon-link',
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
    },
    templates: {
      Post: '/:title',
      Tag: '/tag/:id'
    },
    // plugins: [
    //     {
    //       use: '@gridsome/source-filesystem',
    //       options: {
    //         path: 'blog/**/*.md',
    //         typeName: 'Post',
    //         remark: {}
    //       }
    //     }
    // ],
    plugins: [
      {
        // Create posts from markdown files
        use: '@gridsome/source-filesystem',
        options: {
          typeName: 'Post',
          path: 'content/posts/*.md',
          refs: {
            // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
            tags: {
              typeName: 'Tag',
              route: "/tag/:id",
              create: true
            }
          }
        }
      }
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}