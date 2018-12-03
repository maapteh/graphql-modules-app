import App from '../components/App';
import {FlightsList} from '../components/flights-list/flights-list';

export default () => (
    <App title="Flights">
        <div className="content__section">
            <FlightsList />
        </div>
    </App>
);
