import App from '../components/App';
import { Header } from '../components/header/header';
import { FlightsList } from '../components/flights-list/flights-list';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <FlightsList />
    </div>
  </App>
);
