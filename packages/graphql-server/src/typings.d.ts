declare module '*.graphql' {
    import { DocumentNode } from 'graphql';

    const value: DocumentNode;
    export = value;
}

declare module 'graphql-depth-limit';
