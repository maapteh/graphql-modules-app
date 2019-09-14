import { checkStatus } from './check-status';

describe('Helpers: checkStatus', () => {
    it('should give a response', () => {
        const response = { ok: true, status: 200 } as any;
        const status = checkStatus(response);
        expect(status).toEqual(response);
    });
    it('should give no response', () => {
        const status = checkStatus({ res: { success: false } } as any);
        expect(status).toBeNull();
    });
});
