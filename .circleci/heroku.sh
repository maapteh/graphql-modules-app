#!/bin/sh -e

usage() {
  echo "OVERVIEW: Build apps according to BUILD_ENV value. Meant to be used for Heroku deployment"
  exit
}

if [ "$1" = '-h' ] || [ "$1" = '--help' ]; then
  usage
fi

(
  PROJECT_ROOT="$(cd $(dirname $0)/..; pwd)"

  cd $PROJECT_ROOT

  if [ "$BUILD_ENV" = "app" ]; then
    yarn workspace graphql-app build
  elif [ "$BUILD_ENV" = "server" ]; then
    yarn workspace graphql-server build
  else
    echo "Error: no build config for BUILD_ENV value '$BUILD_ENV'"
    exit 1
  fi
)