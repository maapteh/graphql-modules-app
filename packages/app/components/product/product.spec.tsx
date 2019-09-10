import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { renderHook } from '@testing-library/react-hooks';
import { DATA_9200000111963040 } from '../../../server/test/__mocks__/stubs/product-9200000111963040';
import { useGetProductQuery } from '../../lib/_generated-hooks';

// FIXME: FIND OUT HOW TO MAKE IT WORK WITH FRAGMENTS

// FOR NOW ADDED THE QUERY INLINE OVERHERE!
/** GET PRODUCT QUERY */
import gql from 'graphql-tag';
export const GET_PRODUCT = gql`
    query getProduct($id: String!) {
        getProduct(id: $id) {
            id
            title
            rating
            shortDescription
            images {
                key
                url
            }
            urls {
                key
                value
            }
        }
    }
`;

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
            // our mocks have __typename's but we are disabling them so can also run without
            // TODO: cache for fragments?
            <MockedProvider mocks={mocks} addTypename={false}>
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
