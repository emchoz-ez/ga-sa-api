import { Sequelize } from 'sequelize-typescript';
import { Car } from 'src/modules/cars/car.entity';
import { CarType } from 'src/modules/codebooks/car-type/entities/car-type.entity';
import { User } from 'src/modules/users/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import parseDatabaseUrl from '../utils/parse-database-url';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      const parsedConfig = parseDatabaseUrl(databaseConfig.production.uri);
      console.log(parsedConfig, 'KATOLICI');
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = parsedConfig;
          break;
        default:
          config = databaseConfig.development;
      }
      let sequelize: any;
      process.env.NODE_ENV === 'PRODUCTION'
        ? (sequelize = new Sequelize(config.connectionString, {
            dialect: 'postgres',
            protocol: 'postgres',
            port: 5432,
            host: config.host,
            logging: true,
          }))
        : (sequelize = new Sequelize(config));
      sequelize.addModels([User, Car, CarType]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
