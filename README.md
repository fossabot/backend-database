# impAct - backend-database
Contains all entities and DTOs including validation and [OpenAPI](https://swagger.io/specification/) annotations.
The latter are dependent on [NestJS](https://docs.nestjs.com/) used for microservices, so additional dependencies are needed.
The ORM used is [TypeORM](https://typeorm.io).

## Setup & Usage
You only have to run `npm i`.

* Syncing: `npm run sync`

## Structure
There is one folder per entity under src/entities. 

It contains: 
* <>.entity: Defines the entity
* requests.dto: Defines DTOs that are required for incoming requests
* responses.dto: Defines DTOs that are required for outgoing responses

Under src/entities is the index.ts, which is the entry point for the node module: 
**All defined classes must be exported here.**

## Usage in impAct microservices
You can install the module with npm directly from GitHub.
* Latest version from the master branch: `npm i impactify/backend-database`
* Specific version via release tag `npm i impactify/backend-database`

## Useful resources
* [TypeORM postgres types & annotations](https://github.com/typeorm/typeorm/blob/master/test/functional/database-schema/column-types/postgres/entity/Post.ts)
* [NestJS OpenAPI/Swagger](https://docs.nestjs.com/recipes/swagger)
* [Class-Validator](https://github.com/typestack/class-validator)
* [TypeORM / Postgres column types](https://github.com/typeorm/typeorm/blob/master/test/functional/database-schema/column-types/postgres/entity/Post.ts#L144)
