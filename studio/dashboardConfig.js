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
                  buildHookId: '5f9c4f94fed9ee0d25bcee26',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7wsn6jfb',
                  apiId: '1004a9d1-2b3a-4b67-92aa-868975fa9a26'
                },
                {
                  buildHookId: '5f9c4f94e225040ffd3a10a6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dtknpxz9',
                  apiId: '970005b3-ca1c-4609-b7b0-29dd3fbc5201'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fawidzz09/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dtknpxz9.netlify.app', category: 'apps'}
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
