# GRAPHQL-SERVER
>based on GraphQL Modules https://github.com/Urigo/graphql-modules
[docs](https://graphql-modules.com/docs/introduction/getting-started).

## Introduction

### Development
- `yarn install` (once)
- `yarn generate-types` (when you update something in schema) TODO: automate
- `yarn dev` (also a debug version is avalailable running `yarn dev-debug`, and engine version with `ENGINE=on yarn dev`)
- open: [http://localhost:4000/graphql](http://localhost:4000/graphql)

### Production
- `yarn install` (once)
- `yarn build`
- `yarn start`
- open: [http://localhost:4000/graphql](http://localhost:4000/graphql)

## Experimental
1) `yarn dev:monitoring`, other tab `node_modules/.bin/pm2 monit` this is exposing metrics on production build locally
