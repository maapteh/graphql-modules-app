// When you want another interface back
interface Content {
    meta: string;
    components: [string];
}

interface ContentComponent {
    [key: string]: string;
}

export default {
    Content: {
        meta: (r: Content) => r.meta,
        components: (r: Content) => r.components,
    },
    ContentComponent: {
        // tslint:disable-next-line
        __resolveType(obj: ContentComponent) {
            // Same definitions as in mapComponents
            switch (obj.type) {
                case 'Article':
                    return 'ContentComponentArticle';
                case 'GlobalNotification':
                    return 'ContentComponentGlobalNotification';
                case 'Header':
                    return 'ContentComponentHeader';
                default:
                    return 'ContentComponentUnknown';
            }
        },
    },
};
