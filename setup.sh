#!/bin/bash

ENV=${1:-'dev'}

DOCKERFILE="docker/docker-compose.${ENV}.yml"

if [ -f "$DOCKERFILE" ]; then
  rm docker-compose.override.yml 2> /dev/null
  ln -s "$DOCKERFILE" docker-compose.override.yml 
else
  echo "No such file: ${DOCKERFILE}"
  exit 1
fi
