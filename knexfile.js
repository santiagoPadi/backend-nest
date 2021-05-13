// Update with your config settings.
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    ...(process.env.DB_HOST && { host: process.env.DB_HOST }),
    database:
      process.env.NODE_ENV === 'test'
        ? process.env.DB_TEST_DATABASE
        : process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ...(process.env.DB_SSL && { ssl: process.env.DB_SSL }),
    ...(process.env.DB_PORT && { port: process.env.DB_PORT }),
  },
  pool: {
    min: Number(process.env.DB_POOL_MIN),
    max: Number(process.env.DB_POOL_MAX),
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: './db/seeders',
  },
  debug: process.env.KNEX_DEBUG === 'true',
};
