./node_modules/.bin/concurrently --names "REACT, REACT-COMPONENTS, GRAPHQL, GRAPHQL-TYPES" \
 -c "bgBlue.bold,bgGreen,bgMagenta.bold,bgGreen" \
 "cd packages/app && yarn dev" \
 "cd packages/app && yarn generate-components -w" \
 "cd packages/server && yarn dev" \
 "cd packages/server && yarn generate-types -w"