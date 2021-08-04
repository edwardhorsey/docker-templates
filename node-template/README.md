# Docker Templates
You will require Docker and Docker Compose.

# Commands
## Dev
### Bring container up
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
### Bring container down
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v`
## Prod
### Bring container up
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d`
### Bring container down
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v`

## Notes:
-f pass file to docker-compose

-d for detached mode

-v to remove volumes

Upon changing Dockerfile, you will need to tell docker-compose to rebuild the image with --build flag.

## Useful:
### Enter container file system
`docker exec -it [container-name] bash`

### See container logs
`docker logs [container-name]`

### List images
`docker image ls`

### List containers
`docker ps -a`
