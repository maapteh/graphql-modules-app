import express from 'express';
import { ORIGINS_LIST } from './origins-list';

/**
 * ONLY ALLOW ORIGINS WHICH WE DO ALLOW
 */
export const ALLOWED_ORIGIN  = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const origin = req.get('origin');
    if (origin) {
        const index = ORIGINS_LIST.indexOf(origin);
        if (index === -1) {
            const msg =
                'The CORS policy does not allow access from the specified Origin.';
            return next(new Error(msg));
        }
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Origin', ORIGINS_LIST[index]);
    }
    next();
};