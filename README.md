# GraphQL-Modules TypeScript server & NextJS application
Demonstration application for showcase utilizing [https://graphql-modules.com/](https://graphql-modules.com/) which is using data from Schiphol open-api.

## Pre-requisites
Get your free API key from [developer.schiphol.nl/apis/flight-api](https://developer.schiphol.nl/apis/flight-api/overview?version=v3). Create an '.env' file inside './packages/graphql-server' with the following:

```
SCHIPHOL_API_ID=***
SCHIPHOL_API_KEY=***
```

## Online demonstration
[graphql-schiphol.herokuapp.com/](https://graphql-schiphol.herokuapp.com/) which points to the graphql endpoint at [graphql-server-schiphol.herokuapp.com/graphql](https://graphql-server-schiphol.herokuapp.com/graphql).

## Structure
```
.
├── /config/                    # some configuration for build scripts
├── /packages/                  #
│   ├── /graphql-app/           # React NextJS isomorphic application
│   └── /graphql-server/        # Apollo GraphQL server created with graphql-modules
├── /test/                      # end-to-end tests
```

## DEVELOPMENT
- `yarn` (builds all packages)

Now we can start the two applications:

### 1. GRAPHQL-SERVER
Goto './packages/graphql-server'
Run `yarn dev`

### 2. GRAPQL-APP
Goto './packages/graphql-app'
Run `yarn dev`


## Open api SCHIPHOL
The Schiphol flight information is managed by the airlines and airline handlers in the Central Information System Schiphol ( CISS ). Part of this flight information is made available via the Rest API Flight Information (API) to developers.

## TODO
1) Fix autogenerating react components
2) Add sample for development docker setup, running `docker-compose up graphql web nginx`. This runs the graphql server and the application on the same instance.

[![Codeship Status for maapteh/graphql-modules-app](https://app.codeship.com/projects/3bf47d90-d61c-0136-0edf-1a5c0fb66462/status?branch=master)](https://graphql-schiphol.herokuapp.com)