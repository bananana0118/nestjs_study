import { Property } from 'src/entities/property.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_spLqP0SUbB4x@ep-twilight-sunset-aev74z3n-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  type: 'postgres',
  port: 5432,
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  synchronize: true, //only development
};
