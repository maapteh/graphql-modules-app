# GraphQL-Modules TypeScript server & NextJS application
Demonstration application for showcase utilizing [https://graphql-modules.com/](https://graphql-modules.com/) which is using data from BOL.com Open Api.

## Pre-requisites
Get your free API key from [bol.com/documentatie/open-api](https://partnerblog.bol.com/documentatie/open-api). This is for the 'products' part, working on another part too where no key is needed.

## Online demonstration
[graphql-schiphol.herokuapp.com/](https://graphql-schiphol.herokuapp.com/) which points to the graphql endpoint at [graphql-server-schiphol.herokuapp.com/graphql](https://graphql-server-schiphol.herokuapp.com/graphql). *Both containers spin down when no activity, please be patient.*

## Structure
```
.
├── /config/                    # some configuration for build scripts
├── /packages/                  # 2 applications
│   ├── /graphql-app/           # React NextJS isomorphic application
│   └── /graphql-server/        # Apollo GraphQL server created with graphql-modules
├── /test/                      # end-to-end tests
```

## DEVELOPMENT
- `yarn` (builds all packages)

*Now we can start the two applications running **`bash dev.sh`** / `METRICS=on dev.sh` or you can run them individually:*

### 1. GRAPHQL-SERVER
- Goto './packages/graphql-server'
- Run **`yarn dev`**, or `METRICS=on yarn dev` when you want metrics to be reported
*[README](./packages/graphql-server/README.md)*

### 2. GRAPQL-APP
- Goto './packages/graphql-app'
- Run **`yarn dev`**

## PRODUCTION

### Setting vars for production locally or in your CI
Create an '.env' file inside './packages/graphql-server' with the following:
```
SCHIPHOL_API_ID=***
SCHIPHOL_API_KEY=***
ENGINE_KEY=apollo-engine-key-overhere-for-metrics-option-which-is-optional
ALLOWED_ORIGIN=endpoint-your-app-will-run
METRICS=on|off
```
Create an '.env' file inside './packages/graphql-app' with the following:
```
GRAPHQL_ENDPOINT=endpoint-your-graphql-server-will-run
```
### Build
By default after install the build will take place and the start command is running this build.

## Open api SCHIPHOL
The Schiphol flight information is managed by the airlines and airline handlers in the Central Information System Schiphol ( CISS ). Part of this flight information is made available via the Rest API Flight Information (API) to developers.

## TODO
1) Add two graphql endpoints, internal and external for SSR and client
2) Add more tooling, so no copy task of graphql schema's needed anymore (also things like storybook etc etc)
3) Add watcher correctly
4) (Add sample for development docker setup, running `docker-compose up graphql web nginx`. This runs the graphql server and the application on the same instance).

[![Codeship Status for maapteh/graphql-modules-app](https://app.codeship.com/projects/3bf47d90-d61c-0136-0edf-1a5c0fb66462/status?branch=master)](https://graphql-schiphol.herokuapp.com)