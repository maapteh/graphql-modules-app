export const ORIGINS_LIST: string[] = [
    'http://localhost:4000',
    'http://localhost:4001',
    'https://localhost:4001',
    'https://graphql-server-schiphol.herokuapp.com',
    'https://graphql-schiphol.herokuapp.com',
    // @ts-ignore
    process.env.ALLOWED_ORIGIN,
];
