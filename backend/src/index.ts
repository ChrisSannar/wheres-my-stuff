import { createConnection } from 'typeorm';

import { typeOrmConfig } from './postgres.config';

(async () => {
  const connection = await createConnection(typeOrmConfig);
  console.log('Postgres Connected');

  await connection.close();
})();