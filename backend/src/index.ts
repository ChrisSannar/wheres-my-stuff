import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { typeOrmConfig } from './postgres.config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

import apiRoutes from './routes/page-routes';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', apiRoutes);

// A function to test postgress connection via typeorm
async function connectPostgres(): Promise<void> {
  const connection = await createConnection(typeOrmConfig);
  console.log('Postgres Connected');

  await connection.close();
}

app.listen(PORT, async () => {
  console.log('Server running on port ', PORT);
  await connectPostgres();
})