import 'reflect-metadata';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: `${process.cwd()}/.env` });
}
import { bootstrap } from './server';
import { appModule } from './app';

bootstrap(appModule);
