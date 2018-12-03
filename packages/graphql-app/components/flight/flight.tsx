import { ErrorMessage } from '../ErrorMessage';
import { GetFlightComponent } from '../../lib/_generated-components';

export const Flight = ({id}: any) => {

  const queryVars = {
    id: id.toString(),
  };

  return (
    <GetFlightComponent variables={queryVars}>
    {({ loading, error, data: { getFlight } }) => {
        if (error) { <ErrorMessage message="Error loading flights." />; }
        if (loading) { <div>Loading</div>; }

        return(
            <section>
                <h1>Selected Flight {getFlight}</h1>
            </section>
        );
    }}
    </GetFlightComponent>
  );

};
