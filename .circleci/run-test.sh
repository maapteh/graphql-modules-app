#!/bin/bash
repo=$1
branch=`git rev-parse --abbrev-ref HEAD`
if [ "$branch" = "master" ]; then  
  echo "On branch master. Let's run all tests!"  
  eval "yarn test"
elif git diff --name-only origin/master...$branch | grep "^${repo}" ; then  
  echo "Changes detected! Adding ${repo} tests to the queue..."
else  
  echo "No changes detected. Exiting circle build..."  
  circleci step halt
fi