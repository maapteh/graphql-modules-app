import 'reflect-metadata';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: `${__dirname}/../.env` });
    dotenv.load();
}

import { bootstrap } from './server';
import { bootstrapEngine } from './server-engine';
import { appModule } from './app';

// Test application with Apollo Engine
if (process.env.ENGINE && process.env.ENGINE === 'on') {
    bootstrapEngine(appModule);
} else {
    bootstrap(appModule);
}
