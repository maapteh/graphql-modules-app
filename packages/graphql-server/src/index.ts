import 'reflect-metadata';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    dotenv.config({path: `${__dirname}/../.env`});
    dotenv.load();
}

console.log(process.env.API_KEY);

import { appModule } from './app';
import { bootstrap } from './server';

bootstrap(appModule);
