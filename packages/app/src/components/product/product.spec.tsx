import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { renderHook } from '@testing-library/react-hooks';
import { DATA_9200000111963040 } from '../../../../server/test/__mocks__/stubs/product-9200000111963040';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { GET_PRODUCT } from './graphql/get-product.query.graphql';

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
});
