# impAct - backend-database
Contains all entities and DTOs including validation and [OpenAPI](https://swagger.io/specification/) annotations.
The latter are dependent on [NestJS](https://docs.nestjs.com/) used for microservices, so additional dependencies are needed.
The ORM used is [TypeORM](https://typeorm.io).

## Setup & Usage
You only have to run `npm i`.

* Syncing: `npm run sync`

## Useful resources
* [TypeORM postgres types & annotations](https://github.com/typeorm/typeorm/blob/master/test/functional/database-schema/column-types/postgres/entity/Post.ts)

