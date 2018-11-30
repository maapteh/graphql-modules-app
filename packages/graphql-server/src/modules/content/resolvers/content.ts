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
                case 'Header':
                    return 'ContentComponentHeader';
                case 'Article':
                    return 'ContentComponentArticle';
                case 'Freedeliverylane':
                    return 'ContentComponentFreedelivery';
                case 'GlobalNotification':
                    return 'ContentComponentGlobalNotification';
                case 'Promolane':
                    return 'ContentComponentPromo';
                case 'ShopWindow':
                    return 'ContentComponentShopWindow';
                default:
                    return 'ContentComponentUnknown';
            }
        },
    },
};
