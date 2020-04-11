# usagi.io - frontend

This is my portfolio website.


## Running

First it is necessary to setup the environment.  

To setup the development environment run:

```
./setup.sh dev
```

To setup the production environment run:

```
./setup.sh prod
```

### Locally
To bootstrap and run the application locally, run:

```
yarn start
```

### In docker

The application also supports dockerized deployment. Run:

```
docker-compose up
```

Exposed ports can be changed by editing:

- docker.compose.yml
- docker.compose.override.yml (created after initializing the env)

## Helping out

If there's a problem please file an issue on github and I'll fix it asap :)

## Author

shiro <shiro@usagi.io>

## License

The project is licensed udner the MIT license, feel free to use my code in your
projects.
