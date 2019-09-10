import express from 'express';

/**
 * DO NOT CACHE FOR ALL RESPONSES
 * (CacheControl not working correcrly at the moment)
 */
export const NO_CACHE = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
};