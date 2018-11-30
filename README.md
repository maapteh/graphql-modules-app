# GraphQL-Modules TypeScript server & NextJS application
Demonstration application for showcase utilizing [https://graphql-modules.com/](https://graphql-modules.com/) which is using data from Schiphol open-api.

## Pre-requisites
Get free api key from [developer.schiphol.nl/apis/flight-api](https://developer.schiphol.nl/apis/flight-api/overview?version=v3). Create .env file inside './packages/graphql-server' with the following:

```
SCHIPHOL_API_ID=***
SCHIPHOL_API_KEY=***
```

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