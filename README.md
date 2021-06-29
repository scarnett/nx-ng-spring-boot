# Setup

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