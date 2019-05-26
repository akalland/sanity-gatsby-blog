export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ceaf7a93b675f508ec2b3e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7e9u2q62',
                  apiId: '4bd0d2e4-c3c3-486d-a182-158feeb912ae'
                },
                {
                  buildHookId: '5ceaf7a9a5e4b658f690d3f0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zok9fxyz',
                  apiId: 'fdaea3ed-27db-4297-b04e-152fb10a8c16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akalland/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zok9fxyz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
