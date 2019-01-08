export interface IntrospectionResultData {
    __schema: {
        types: {
            kind: string;
            name: string;
            possibleTypes: {
                name: string;
            }[];
        }[];
    };
}

const result: IntrospectionResultData = {
    __schema: {
        types: [
            {
                kind: 'INTERFACE',
                name: 'ContentComponent',
                possibleTypes: [
                    {
                        name: 'ContentComponentArticle',
                    },
                    {
                        name: 'ContentComponentGlobalNotification',
                    },
                    {
                        name: 'ContentComponentHeader',
                    },
                    {
                        name: 'ContentComponentUnknown',
                    },
                ],
            },
        ],
    },
};

export default result;
