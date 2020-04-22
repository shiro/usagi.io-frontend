docker-compose up -d
sleep 20
#docker-compose exec -T php composer req sensiolabs/security-checker
#docker-compose exec -T php bin/console security:check
curl http://localhost
curl -k https://localhost
docker-compose logs
