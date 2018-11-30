import { Query } from 'react-apollo';
import { ErrorMessage } from '../ErrorMessage';
import { FLIGHT_QUERY } from './graphql.flight';

export const Flight = ({id}: any) => {

  const queryVars = {
    id: id.toString(),
  };

  <Query query={FLIGHT_QUERY} variables={queryVars}>
    {({loading, error, data}) => {
      if (error) <ErrorMessage message="Error loading flight details." />;
      if (loading) <div>Loading</div>;

      return (
        <section>Not working yet
          {JSON.stringify(data)}
        </section>
      );
    }}
  </Query>

};
