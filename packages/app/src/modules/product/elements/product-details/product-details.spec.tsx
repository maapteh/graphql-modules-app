import React from 'react';
import { render } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { DATA_9200000111963040 } from '../../../../../../server/test/__mocks__/stubs/product-9200000111963040';

import { ProductDetails } from './product-details';

const mock: any = { 
    getProduct: {...DATA_9200000111963040}
}; // Types of property '__typename' are incompatible

describe('ProductDetails', () => {
    it("shows the default correctly", async () => {

        // findByTestId, queryByText, getByLabelText,
        const { container } = render(<ProductDetails data={mock} />);

        mockAllIsIntersecting(true);

        // generic contract
        expect(container).toMatchSnapshot();

        // specific expectations 
        // FIXME: add more
        expect(container.querySelector('h1').innerHTML).toBe('Ghost Recon Breakpoint Auroa Edition - PS4 (0)');
    });


    it("shows short version correctly", async () => {

        const { queryByText } = render(<ProductDetails data={mock} short/>);

        mockAllIsIntersecting(true);

        expect(queryByText(/features en gameplay-opties/)).toBeNull();
        expect(queryByText('see @bol.com')).toBeNull()
    });

    it("shows no version", async () => {

        const { container } = render(<ProductDetails data={null}/>);

        mockAllIsIntersecting(true);

        expect(container.innerHTML).toBe('');
    });

});