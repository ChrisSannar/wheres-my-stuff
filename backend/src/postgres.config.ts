import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import dotenv from 'dotenv';
dotenv.config();

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
}

export { typeOrmConfig };