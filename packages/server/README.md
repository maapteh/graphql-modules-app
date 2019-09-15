# GRAPHQL-SERVER
>based on GraphQL Modules https://github.com/Urigo/graphql-modules
[docs](https://graphql-modules.com/docs/introduction/getting-started).

## Pre requisites
- `yarn` (not needed when you installed from root)

## Introduction

### Development

1. tab 1: `generate:graphqlcodegen -w`
2. tab 2: `yarn dev` (no mock mode, bol open api key mandetory), or `MOCK_API=on yarn dev` (mock mode)
3. open: [http://localhost:4000/graphql](http://localhost:4000/graphql)

### Production
- `yarn build`
- `yarn start`
now open: [http://localhost:4000/graphql](http://localhost:4000/graphql)

## Experimental
1) `yarn dev:monitoring`, other tab `node_modules/.bin/pm2 monit` this is exposing metrics on production build locally
