import React from 'react';
import { render } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { DATA_9200000111963040 } from '../../../server/test/__mocks__/stubs/product-9200000111963040';
import { ProductDetails } from './product-details';

const mock: any = { getProduct: {...DATA_9200000111963040} };

describe('ProductDetails', () => {
    it("shows correctly", async () => {

        // findByTestId, queryByText, getByLabelText,
        const { container } = render(<ProductDetails data={mock} />);
        // as any since __typename's are wrong
        mockAllIsIntersecting(true);

        // generic contract
        expect(container).toMatchSnapshot();

        // specific expectations
        expect(container.querySelector('h1').innerHTML).toBe('Ghost Recon Breakpoint Auroa Edition - PS4 (0)');
    });
});