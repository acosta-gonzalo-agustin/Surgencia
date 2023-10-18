// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DATABASE_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: '123456',
    database: 'database_test',
    host: 'localhost',
    dialect: 'postgres',
    port: '5434',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: '5433',
  },
};
