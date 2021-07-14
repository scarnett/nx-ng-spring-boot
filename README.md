## About

This is a simple CRUD application built with Spring Boot and Angular for maintaining users. This project is made up of three separate Docker containers for:

* [PostgreSQL](https://www.postgresql.org/) (Database)
* [Spring Boot](https://spring.io/projects/spring-boot) REST API (Server)
* [Angular](https://angular.io/) Frontend (Client)

The entry point for this application is http://localhost:4200/

---

## Setup

In order to run this application you need to install two tools: [Docker](https://www.docker.com/) &amp; [Docker Compose](https://docs.docker.com/compose/).

Instructions how to install **Docker** on [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [Windows](https://docs.docker.com/docker-for-windows/install/), [Mac](https://docs.docker.com/docker-for-mac/install/).

## Run
```bash
docker-compose up -d
```

## Run & Build
```bash
docker-compose up -d --build
```

## Stop
```bash
docker-compose stop
```

## View logs
```bash
docker-compose logs server
docker-compose logs client
```

## PostgreSQL (Database)

The PostgreSQL database contains only a single schema with one table - `users`.

After running the app it can be accessible using the following criteria:

* Host: `localhost`
* Database: `app_db`
* User: `admin`
* Password: `admin`

`docker-compose.yml`

```bash
db:
  image: 'postgres:13.3-alpine'
  container_name: postgres
  volumes:
    - postgres:/var/lib/postgresql/data
  ports:
    - '5432:5432'
  environment:
    - POSTGRES_DB=app_db
    - POSTGRES_USER=admin
    - POSTGRES_PASSWORD=admin
  restart: always
```

## Spring Boot REST API (Server)
This is a Spring Boot (Java) based application that connects with a database and exposes some REST endpoints which are being consumed by the angular frontend. It supports multiple HTTP REST methods like GET, POST, PUT and DELETE for a single resource - `users`.

`docker-compose.yml`

```bash
server:
  build: ./apps/server
  container_name: server
  environment:
    - DB_SERVER=db
    - DB_PORT=5432
    - POSTGRES_DB=app_db
    - POSTGRES_USER=admin
    - POSTGRES_PASSWORD=admin
  ports:
    - '8080:8080'
  depends_on:
    - db
```

## Angular Frontend (Client)

This is the endpoint for a user to maintain other users. It consumes the REST API endpoints that are being provided by `server`.

`docker-compose.yml`

```bash
client:
  build: ./apps/client
  container_name: client
  ports:
    - '4200:80'
  depends_on:
    - server
```

## Credits
Created by [@scarnett](https://github.com/scarnett/)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
Copyright &copy; 2021 Scott Carnett. Licensed under the MIT License (MIT)

## Nx
<p>This project was generated using <a href="https://nx.dev" target="_blank">Nx</a>.</p>
<img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="100" />
