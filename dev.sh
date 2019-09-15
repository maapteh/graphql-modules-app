./node_modules/.bin/concurrently --names "REACT, REACT-COMPONENTS, GRAPHQL, GRAPHQL-TYPES" \
 -c "blue.bold,gray,cyan.bold,gray" \
 "cd packages/app && yarn dev" \
 "cd packages/app && yarn generate:graphqlcodegen -w" \
 "cd packages/server && yarn dev" \
 "cd packages/server && yarn generate:graphqlcodegen -w"