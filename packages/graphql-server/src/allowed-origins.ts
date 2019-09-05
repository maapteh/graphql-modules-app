export const allowedOrigins: string[] = [
    'http://localhost:4000',
    'http://localhost:4001',
    'http://graphql-server-schiphol.herokuapp.com',
    'https://graphql-server-schiphol.herokuapp.com',
    'http://graphql-schiphol.herokuapp.com',
    'https://graphql-schiphol.herokuapp.com',
    // @ts-ignore
    process.env.ALLOWED_ORIGIN,
];
