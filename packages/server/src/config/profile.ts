// TODO: generic config for all packages: LOCAL, DEVELOPMENT, PRODUCTION
export const activeProfile: any = (process.env.PROFILE as any) || 'LOCAL';
