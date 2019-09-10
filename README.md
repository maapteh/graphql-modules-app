# GraphQL-Modules TypeScript Server & NextJS React application
Demonstration application for showcase utilizing [Graphql-modules](https://graphql-modules.com/) which is using data from BOL.com Open Api for the server (also complete mocked version is available). You will find a sample with products and dataloader.
The React web application is using [NextJS](https://nextjs.org/), [GraphQL Codegen by Dotan](https://graphql-code-generator.com) and [Apollo hooks](https://www.apollographql.com/docs/react/api/react-hooks/).

## PRE-REQUISITES
- Node dubnium
- Facebook watchman (only for development) [optional]
- Get your free API key from [bol.com/documentatie/open-api](https://partnerblog.bol.com/documentatie/open-api). Its also possible to run it in mocked mode, no keys needed.

## INSTALL
1. `yarn`
2. `bash setup.sh` sets correct local .env file with mock mode as default

## STRUCTURE
```
.
├── /config/            # some configuration for build scripts
├── /packages/          # 2 applications
│   ├── /app/           # React NextJS isomorphic application
│   └── /server/        # Apollo GraphQL server created with graphql-modules
├── /test/              # end-to-end tests
```

## DEVELOPMENT
**Now run `bash dev.sh`. It will spin up the GraphQL server and the React application.**

## PLAYGROUND
At [local-server](http://localhost:400) or [demo-server](https://graphql-server-schiphol.herokuapp.com/graphql) you will see [dataloader](./packages/server/src/modules/product/providers/product-data-loader.ts) taking care of eventually requesting two products from the API in one single call. Use the following query:

```
{
  foo: getProduct(id:"9200000111963040") {
    id
    title
  }
  bar:getProduct(id:"9200000111963040") {
    id
    title
    rating
  }
  shizzle:getProduct(id:"9200000108695538") {
    title
    rating
    shortDescription
  }
}
```

## PRODUCTION
By default after install the build will take place and the start command is running this build.

## CONFIGURATION
Environment vars for development (set them in CI for production).

### '.env' file inside './packages/server':

*Important: You can set MOCK_API to ON in case you don't have access to bol.com api. Then the server will use stub data*

```
BOL_API_KEY=***
NODE_ENV=development
MOCK_API=ON|OFF
ENGINE_KEY=optional-apollo-engine-key-overhere REMOVE WHEN NOT AVAILABLE
ALLOWED_ORIGIN=optional-not-needed-dev-mode REMOVE
```

### '.env' file inside './packages/app'
This file is optional, the dev setting is the default.
```
GRAPHQL_ENDPOINT=endpoint-your-graphql-server-will-run
```

## TODO
1) Add more tooling (things like storybook etc etc)
2) Use https://github.com/kamilkisiela/graphql-inspector (also in pipeline, now locally only)

## ARTICLES
- [WhatsApp-Clone-server](https://github.com/Urigo/WhatsApp-Clone-server), [WhatsApp-Clone-Client-React](https://github.com/Urigo/WhatsApp-Clone-Client-React) and [tutorial](https://tortilla.academy/tutorial/whatsapp-react/step/1)
- [Paypal Graphql](https://medium.com/paypal-engineering/graphql-a-success-story-for-paypal-checkout-3482f724fb53)
- [Airbnb luxery homes](https://medium.com/airbnb-engineering/how-airbnb-is-moving-10x-faster-at-scale-with-graphql-and-apollo-aa4ec92d69e2)
- [https://www.graphqlweekly.com/](https://www.graphqlweekly.com/)
- [GraphQL HQ](https://blog.apollographql.com/)


## ONLINE DEMO
*Both Heroku containers spin down when no activity, please be patient.*
[graphql-schiphol.herokuapp.com/](https://graphql-schiphol.herokuapp.com) which points to the graphql endpoint at [graphql-server](https://graphql-server-schiphol.herokuapp.com/graphql). 


## VSC
- [vscode-apollo](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) for autocomplete in app
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) including apollo linting, with vsc workspace settings for eslint:

```
{
    "eslint.alwaysShowStatus": true,
	"eslint.workingDirectories": [
	    "packages/app", "packages/server"
	],
    "prettier.tabWidth": 4
}
```

[![Codeship Status for maapteh/graphql-modules-app](https://app.codeship.com/projects/3bf47d90-d61c-0136-0edf-1a5c0fb66462/status?branch=master)](https://graphql-schiphol.herokuapp.com)
