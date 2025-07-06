import * as path from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default (): PostgresConnectionOptions => ({
  url: process.env.url,
  type: 'postgres',
  port: +(process.env.port ?? 5432),
  entities: [path.resolve(__dirname, '..') + '**/*.entity{.ts,.js}'],
  synchronize: false,
});
