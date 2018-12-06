./node_modules/.bin/concurrently --names "REACT, REACT-COMPONENTS, GRAPHQL, GRAPHQL-TYPES" \
 -c "bgBlue.bold,bgGreen,bgMagenta.bold,bgGreen" \
 "cd packages/graphql-app && yarn dev" \
 "cd packages/graphql-app && yarn generate-components -w" \
 "cd packages/graphql-server && yarn dev" \
 "cd packages/graphql-server && yarn generate-types -w"