import { Query } from 'react-apollo';
import { ErrorMessage } from '../ErrorMessage';
import { FLIGHT_QUERY } from './graphql.flight';

export const Flight = ({id}: any) => {

  const queryVars = {
    id: id.toString(),
  };

  return (
    <Query query={FLIGHT_QUERY} variables={queryVars}>
        {({loading, error, data}) => {
        if (error) { <ErrorMessage message="Error loading flight." /> }
        if (loading) { <div>Loading</div> }

        return (
            <section>
                <h1>Selected Flight {data.getFLight}</h1>
            </section>
        );
        }}
    </Query>
  );

};
