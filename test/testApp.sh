#!/bin/bash

set -e

(docker-compose up) &
sleep 20
#docker-compose exec -T php composer req sensiolabs/security-checker
#docker-compose exec -T php bin/console security:check
curl http://localhost:3000
#curl -k https://localhost:3000
docker-compose logs
