# wheres-my-stuff
An app to organize stuff and find it later.

## Requirements

This project uses the following programs:
- node.js
- npm/yarn
- docker-compose

## Setup

Set up the docker database:
  - `yarn`: Installs all th neede dependencies
  - `docker-compose up -d`: creates a postgres database using docker. Check the `docker-compose.yml` file for database configurations (like username/password).
  - Set up `.env` file with the following values:
    * `DB_HOST` - Database hosted location
    * `DB_PORT` - Database port
    * `DB_USERNAME` - Database username
    * `DB_PASSWORD` - Database password
    * `DB_NAME` - Database name
  - `tsc`: compiles the typescript into a `dist` folder to be run using the next command.
  - `yarn start`: runs the application
