module.exports = {
    client: {
        service: {
          name: 'maapteh-6450',
          localSchemaFile: './packages/server/src/_schema.graphql'
        },
        addTypename: false,
        excludes: ['**/__tests__/**/*', '**/__mocks__/**/*'],
        includes: ['./packages/app/src/**/*.graphql.ts']
    },
};
