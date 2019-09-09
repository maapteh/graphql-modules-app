# NextJS Apollo GraphQL

## Introduction
This simple application is created to show the complete setup of our Apollo GraphQL [endpoint](../server/README.md) created with GraphQL-Modules, with this isomorphic application consuming it.

## Pre-requisites
- `yarn`

## DEVELOPMENT
1. Be sure to run the [server](../server/README.md) first
2. tab 1: `generate:graphqlcodegen -w`
3. tab 2: `yarn dev`

## GRAPHQL TOOLS

- `yarn inspector:validate` see if all queries are done correctly
- `yarn inspector:coverage` see what types from the schema are actually used in this application
