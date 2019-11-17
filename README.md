# GraphQL-Modules TypeScript Server & NextJS React application
> Demonstration application for showcase utilizing [Graphql-modules](https://graphql-modules.com/) which is using data from BOL.com Open Api for the server (also complete mocked version is available). You will find a sample with products and dataloader.
The React web application is using [NextJS](https://nextjs.org/), [GraphQL Codegen by Dotan](https://graphql-code-generator.com) and [Apollo hooks](https://www.apollographql.com/docs/react/api/react-hooks/). _More background information about this app is in the [wiki](../../wiki)._ I would like to thank [The Guild](https://the-guild.dev) for their awesome GraphQL toolchain.

## PRE-REQUISITES
- Node dubnium (required) or higher
- Facebook watchman (only for development) (optional)
- Get your free API key from [open api bol.com](https://partnerblog.bol.com/documentatie/open-api) (optional)

## INSTALL
1. `yarn`
2. `bash setup.sh` sets correct local .env file for server part with _mock mode as default_ (it is possible to set your bol.com api key there as well (then also set MOCK_API=off), the only difference will be using a real datasource or not!)
3. Apollo [vsc extension](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) (optional)

## ONLINE DEMO
*Both Heroku containers spin down when no activity, please be patient.*
[graphql-schiphol.herokuapp.com/](https://graphql-schiphol.herokuapp.com) which points to the graphql endpoint at [graphql-server](https://graphql-server-schiphol.herokuapp.com/graphql) - [interactive graph](https://graphql-server-schiphol.herokuapp.com/voyager). 

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
**Now when you followed the install part (and looked at point 2, its nicer with a real datasource) you can simply run `yarn start`. It will spin up the GraphQL server and the React application.**
Please look at the VSC plugins below for editor happiness.

It is also possible to just play with only the server part with `MOCK_API=on yarn start:dev:server`, which spins up the graphql server in mocked mode.
Or `BOL_API_KEY=*** yarn start:dev:server` which spins it up in non mocked mode when you have an open api bol.com key.

## PLAYGROUND
At [local-server](http://localhost:400) or [demo-server heroku](https://graphql-server-schiphol.herokuapp.com/graphql) you will see [dataloader](./packages/server/src/modules/product/providers/product-data-loader.ts) taking care of eventually requesting two products from the API in one single call. Using the following query:

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

You can find product and product category id's on the real bol.com website to play further.

## CODE DEMONSTRATION
Product is explained in:
- [graphql module](packages/server/src/modules/product) the injectable Product module
- [frontend module](packages/app/src/modules/product) the client component

## PRODUCTION
By default after install the build will take place.
*Please look carefully at ./packages/server/src/server.ts#37 and put comment back when really deploying for production, then you need to turn off introspection and interactive graph, they are now only turned on for demonstration effect.*

## CONFIGURATION
Environment vars for development (set them in CI for production).

### '.env' file inside './packages/server':

*Important: You can set MOCK_API to 'on' in case you don't have access to bol.com api. Then the server will use stub data*

```
BOL_API_KEY=***
NODE_ENV=development
MOCK_API=on|off
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
2) `yarn upgrade-interactive --latest`
3) ask apollo team if graphiql can be offline too now loads resources like 'https://cdn.jsdelivr.net/npm/@apollographql/graphql-playground-react@1.7.31/build/static/js/middleware.js'

## ARTICLES
- [WhatsApp-Clone-server](https://github.com/Urigo/WhatsApp-Clone-server), [WhatsApp-Clone-Client-React](https://github.com/Urigo/WhatsApp-Clone-Client-React) and [tutorial](https://tortilla.academy/tutorial/whatsapp-react/step/1)
- [Paypal Graphql](https://medium.com/paypal-engineering/graphql-a-success-story-for-paypal-checkout-3482f724fb53)
- [Airbnb luxery homes](https://medium.com/airbnb-engineering/how-airbnb-is-moving-10x-faster-at-scale-with-graphql-and-apollo-aa4ec92d69e2)
- [https://www.graphqlweekly.com/](https://www.graphqlweekly.com/)
- [GraphQL HQ](https://blog.apollographql.com/)


## VSC plugins
- [vscode-apollo](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) for autocomplete in app
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) including apollo linting


[![Codeship Status for maapteh/graphql-modules-app](https://app.codeship.com/projects/3bf47d90-d61c-0136-0edf-1a5c0fb66462/status?branch=master)](https://graphql-schiphol.herokuapp.com)

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/maas38/graphql-workshop)
