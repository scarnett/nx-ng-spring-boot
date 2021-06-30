# Setup

This project uses <a href="https://nx.dev" target="_blank">Nx</a>. Go [here](https://nx.dev/latest/angular/getting-started/cli-overview) for installation instructions.


# Run
```bash
docker-compose logs server
```

# Stop
```bash
docker-compose stop
```

# View logs
```bash
docker-compose logs server
docker-compose logs client
```

# Install Packages
```bash
npm i
```

## Postgres

```bash
sudo apt install postgresql postgresql-contrib
sudo -u postgres psql
```

```psql
postgres=# create database nx_ng_spring_boot;
postgres=# create user admin with encrypted password 'admin';
postgres=# grant all privileges on database nx_ng_spring_boot to admin;
exit
```

## Run Server

```bash
nx run server:run
```

## Run Client

```bash
nx serve client
```

## Credits
Created by [@scarnett](https://github.com/scarnett/)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
Copyright &copy; 2021 Scott Carnett. Licensed under the MIT License (MIT)

## Nx
<p>This project was generated using <a href="https://nx.dev" target="_blank">Nx</a>.</p>
<img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="100" />