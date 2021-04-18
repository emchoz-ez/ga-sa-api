import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_TEST,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        // username: process.env.DB_USER_PROD,
        // password: process.env.DB_PASS_PROD,
        // use_env_variable: process.env.DB_NAME_PRODUCTION_PROD,
        // host: process.env.DB_HOST_PROD,
        // uri: 'postgres://jnfugvydonfqai:b15775dbcc5fe1a9001de426f1a2c5913e22aa5388d00ea91a5ed3a2db63a744@ec2-67-202-63-147.compute-1.amazonaws.com:5432/d44hvf10bnro8s',
        // dialect:  'postgres',
        // protocol: 'postgres',
        // logging:  true,
        use_env_variable: "postgres://jnfugvydonfqai:b15775dbcc5fe1a9001de426f1a2c5913e22aa5388d00ea91a5ed3a2db63a744@ec2-67-202-63-147.compute-1.amazonaws.com:5432/d44hvf10bnro8s",
        dialect: 'postgres',
        dialectOptions: {
          ssl: true,
        }
    },
};