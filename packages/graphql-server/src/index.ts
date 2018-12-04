import 'reflect-metadata';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: `${__dirname}/../.env` });
    dotenv.load();
}

import { bootstrap } from './server';
import { bootstrapMetrics } from './server-metrics';
import { appModule } from './app';

// Test application with Apollo Engine and Metrics
if (process.env.METRICS && process.env.METRICS === 'on') {
    bootstrapMetrics(appModule);
} else {
    bootstrap(appModule);
}
