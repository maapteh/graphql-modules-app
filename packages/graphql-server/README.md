# GRAPHQL-SERVER
>based on GraphQL Modules https://github.com/Urigo/graphql-modules
[docs](https://graphql-modules.com/docs/introduction/getting-started).

## Introduction

### Development
- `yarn install` (once)
- `yarn generate-types` (when you update something in schema) TODO: automate
- `yarn dev` (also a debug version is avalailable running `yarn dev-debug`)
- open: [http://localhost:4000/graphql](http://localhost:4000/graphql)

### Production
- `yarn install` (once)
- `yarn build`
- `yarn start`
- open: [http://localhost:4000/graphql](http://localhost:4000/graphql)



## Apollo engine
In `./src/index` you will find the option to run this application with Apollo Engine ('_server') and without ('./server'). By default we test this application using Apollo Engine.

## Experimental
1) `yarn dev:monitoring`, other tab `node_modules/.bin/pm2 monit` this is exposing metrics on production build locally
