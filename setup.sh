#! /bin/bash

# Setup default env for server
if [ ! -e ./packages/server/.env ]; then
    echo "BOL_API_KEY=
NODE_ENV=development
MOCK_API=on" > "./packages/server/.env"
    echo "⚡ Created a mock .env inside server packages, 
    turn mock off by placing your bol open api key and set MOCK_API to off"
fi