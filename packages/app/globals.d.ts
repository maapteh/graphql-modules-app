import "@testing-library/jest-dom/extend-expect";

declare module NodeJS {
    export interface Global {
        document: Document;
        window: Window;
        fetch: any;
    }
}

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            fetch: any;
            navigator: Navigator;
        }
    }
}

declare var global: Global;