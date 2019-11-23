import NoSSR from '@mpth/react-no-ssr';
import { App } from '../modules/App';

const Sample = () => (
    <App>
        <p>Serverside with no Apollo</p>
        <NoSSR>
            <p>Only clientside</p>
        </NoSSR>
    </App>
);

export default Sample;
