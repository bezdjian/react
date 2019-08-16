# React Apollo GraphQL project with sequelize and mysql

## Getting started

1. Import sql into your database
2. Change the following in server/src/db.js
```
const Conn = new Sequelize(
  'database', <-- Your DB name>
  'username', <-- Your DB username>
  'password', <-- Your DB pass>
  {
    dialect:'mysql',
    host: 'localhost'
  }
);
```

3. Into the server directory :
Installing dependancies  and run
```
npm install
npm run start
```

3. Into the client directory :
Open another bash and run 

```
npm install
npm run start
```
