import * as React from 'react';
import ContentLoader from 'react-content-loader';

export const ProductPlaceholder = () => (
    <ContentLoader
        height={160}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
    >
        <rect x="88" y="12" rx="4" ry="4" width="284" height="16" />
        <rect x="88" y="40" rx="3" ry="3" width="201" height="8" />
        <rect x="88" y="58" rx="3" ry="3" width="240" height="8" />
        <rect x="6" y="9" rx="0" ry="0" width="75" height="98" />
    </ContentLoader>
);
