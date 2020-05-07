export default {
  widgets: [
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
                  buildHookId: '5eb40c4d5a27a280366617b3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vx8y39vz',
                  apiId: '6be3734e-2c25-4ead-a663-2dd839643a77'
                },
                {
                  buildHookId: '5eb40c4da2b27cf775584e81',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-n8q83acf',
                  apiId: '46f22197-d03d-47f0-a956-ebb907290aef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sc-searchengineunity/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-n8q83acf.netlify.app', category: 'apps'}
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
