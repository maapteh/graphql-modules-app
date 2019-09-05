# GraphQL-Modules TypeScript server & NextJS application
Demonstration application for showcase utilizing [https://graphql-modules.com/](https://graphql-modules.com/) which is using data from BOL.com Open Api for the server.
The React web application is using NextJS 9, [codegen by Dotan](https://graphql-code-generator.com) and [apollo hooks](https://www.apollographql.com/docs/react/api/react-hooks/).

## PRE-REQUISITES
- Node dubnium
- Facebook watchman (only for development) [optional]
- Get your free API key from [bol.com/documentatie/open-api](https://partnerblog.bol.com/documentatie/open-api). This is for the 'products' part, working on another part too where no key is needed. [optional]

## ONLINE DEMO
[graphql-schiphol.herokuapp.com/](https://graphql-schiphol.herokuapp.com/) which points to the graphql endpoint at [graphql-server-schiphol.herokuapp.com/graphql](https://graphql-server-schiphol.herokuapp.com/graphql). *Both containers spin down when no activity, please be patient.*

## STRUCTURE
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
- `bash dev.sh`

### Configuration
Environment vars for development (set them in CI for production).

*Create an '.env' file inside './packages/graphql-server' with the following:*
```
BOL_API_KEY=***
ENGINE_KEY=apollo-engine-key-overhere-for-metrics-option-which-is-optional
ALLOWED_ORIGIN=endpoint-your-app-will-run
```
*Create an '.env' file inside './packages/graphql-app' with the following:*
```
GRAPHQL_ENDPOINT=endpoint-your-graphql-server-will-run
```

### Start
*Now we can start the two applications running **`bash dev.sh`** or you can run them individually:*

### 1. GRAPHQL-SERVER
- Goto './packages/graphql-server'
- Run **`yarn dev`**

### 2. GRAPQL-APP
- Goto './packages/graphql-app'
- Run **`yarn dev`**

## PRODUCTION
By default after install the build will take place and the start command is running this build.

## TODO
1) Add more tooling, so no copy task of graphql schema's needed anymore (also things like storybook etc etc)
2) Use https://github.com/kamilkisiela/graphql-inspector (edited)  in pipeline

## Interesting reads
- [WhatsApp-Clone-server](https://github.com/Urigo/WhatsApp-Clone-server), [WhatsApp-Clone-Client-React](https://github.com/Urigo/WhatsApp-Clone-Client-React) and [tutorial](https://tortilla.academy/tutorial/whatsapp-react/step/1)
- [Paypal Graphql](https://medium.com/paypal-engineering/graphql-a-success-story-for-paypal-checkout-3482f724fb53)
- [Airbnb luxery homes](https://medium.com/airbnb-engineering/how-airbnb-is-moving-10x-faster-at-scale-with-graphql-and-apollo-aa4ec92d69e2)



[![Codeship Status for maapteh/graphql-modules-app](https://app.codeship.com/projects/3bf47d90-d61c-0136-0edf-1a5c0fb66462/status?branch=master)](https://graphql-schiphol.herokuapp.com)
