# impAct - backend-database
Contains all entities and DTOs including validation and [OpenAPI](https://swagger.io/specification/) annotations.
The latter are dependent on [NestJS](https://docs.nestjs.com/) used for microservices, so additional dependencies are needed.
The ORM used is [TypeORM](https://typeorm.io).

## Setup & Usage
You only have to run `npm i` to install dependencies.

You have to rename *ormconfig.template.json* to *ormconfig.json* and fill out the template according to your desired configuration 

* Syncing: `npm run sync`

For git commits please use `npm run commit`. This automatically compiles all typescript
files for use.
## Structure
There is one folder per entity under src/entities. 

It contains: 
* <>.entity: Defines the entity
* requests.dto: Defines DTOs that are required for incoming requests
* responses.dto: Defines DTOs that are required for outgoing responses

Under src/entities is the index.ts: 
**All defined classes must be exported here.**

Entry point for the node module is the `build/index.js`.  
Also the type file must be specified in package.json: `"types": "build/index.d.ts"`
## Usage in impAct microservices
You can install the module with npm directly from GitHub.
* Latest version from the master branch: `npm i impactify/backend-database`
* Specific version via release tag `npm i impactify/backend-database`

## Useful resources
* [TypeORM postgres types & annotations](https://github.com/typeorm/typeorm/blob/master/test/functional/database-schema/column-types/postgres/entity/Post.ts)
* [NestJS OpenAPI/Swagger](https://docs.nestjs.com/recipes/swagger)
* [Class-Validator](https://github.com/typestack/class-validator)
* [TypeORM / Postgres column types](https://github.com/typeorm/typeorm/blob/master/test/functional/database-schema/column-types/postgres/entity/Post.ts#L144)
