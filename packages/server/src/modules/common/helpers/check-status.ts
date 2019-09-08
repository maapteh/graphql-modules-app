import { Response } from 'node-fetch';

export const checkStatus = (res: Response) => {
    if (res.ok) {
        // res.status >= 200 && res.status < 300
        return res;
    }
    // TODO: throw error?
    return null;
};
