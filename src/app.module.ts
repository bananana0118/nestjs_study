import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/db.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import dbConfigProduction from './config/db.config.production';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig, dbConfigProduction],
    }),
    PropertyModule,
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV === 'production' ? dbConfigProduction : dbConfig,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
