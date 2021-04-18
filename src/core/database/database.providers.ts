import { Sequelize } from 'sequelize-typescript';
import { Car } from 'src/modules/cars/car.entity';
import { CarType } from 'src/modules/codebooks/car-type/entities/car-type.entity';
import { User } from 'src/modules/users/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        console.log(config, 'CONFIG ***************')
        const sequelize = new Sequelize(config);
        sequelize.addModels([User, Car, CarType]);
        await sequelize.sync();
        return sequelize;
    },
}];