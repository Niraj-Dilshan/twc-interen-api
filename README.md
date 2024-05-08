# TWC Inter Test API

## Description

This API is built using the NestJS framework, Prisma, and MySQL for managing contacts. It utilizes JWT tokens to protect and authenticate endpoints.

## Installation

1. Set up the .env file:
    ```bash
    $ npm install
    ```
2. Set up the .env file:
     ```
     cp .env.example .env
     ```
3. Update the .env file with the following information: 
     ```
     DATABASE_URL="mysql://admin:admin@1234!@localhost:3306/twc?schema=public"
     JWT_SECRET="SupreSecretKey@1234!@#"
     ```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
