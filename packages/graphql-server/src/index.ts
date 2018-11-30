import 'reflect-metadata';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    dotenv.config({path: `${__dirname}/../.env`});
    dotenv.load();
}

import { appModule } from './app';
// Option to see how Engine with metrics works: './_server'
import { bootstrap } from './server';

bootstrap(appModule);
