import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { DATA_9200000111963040 } from '../../../../server/test/__mocks__/stubs/product-9200000111963040';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { GET_PRODUCT } from './graphql/get-product.graphql';
import { Product } from './product';

/** MOCKS */
const mocks = [
    {
        request: {
            query: GET_PRODUCT,
            variables: {
                id: '9200000111963040'
            },
        },
        result: {
            data: {
                getProduct:  {...DATA_9200000111963040}
            },
        },
    },
];

describe('Product', () => {
    // jest.useFakeTimers();
    // jest.runAllTicks();

    it('passes data correctly', async () => {
        const id = '9200000111963040';

        const wrapper = ({children}) => (
            <MockedProvider mocks={mocks} addTypename={true}>
                {children}
            </MockedProvider>
        );

        const { result, waitForNextUpdate } = renderHook(() => useGetProductQuery({
                variables: { id },
            }), {
            wrapper,
        });

        // component starts with loading state
        expect(result.current.loading).toBe(true);

        // Wait for the next thick
        await waitForNextUpdate();

        // correct state and passed variables
        expect(result.current.loading).toBe(false);
        expect(result.current.variables.id).toBe(id);

        expect(result.current.data.getProduct).toEqual(
          expect.objectContaining({
            id: id,
            title: 'Ghost Recon Breakpoint Auroa Edition - PS4'
          })
        );

    });


    it('renders correctly', async () => {
        const id = '9200000111963040';

        const { container, findByText } = render(
            <MockedProvider mocks={mocks} addTypename={true}>
                <Product id={id} />
            </MockedProvider>
        );

        mockAllIsIntersecting(true);

        await findByText('loading...');
        await findByText(/De Ghost Recon/);

        // generic contract
        expect(container).toMatchSnapshot();
    });
});
