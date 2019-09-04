import { App } from '../components/App';

export default () => (
    <App>
        <div className="content__section">
            <h1>Showcase GraphQL</h1>

            <h2>React client</h2>
            <p>
                NextJS is used because it gives a setup in which it's esy to
                have an isomorphic application without too much code. This way
                there is more focus on the GraphQL part.
            </p>
            <p>
                We only need to provide an{' '}
                <a href="https://github.com/maapteh/graphql-modules-app/blob/master/packages/graphql-app/lib/init-apollo.js">
                    Apollo client
                </a>{' '}
                with the{' '}
                <a href="https://github.com/maapteh/graphql-modules-app/blob/master/packages/graphql-app/lib/with-apollo-client.js#L61">
                    React application
                </a>
                . Now we are able to have control if component needs to be
                rendered server or client side and also we can debatch the
                component (mostly on components where the data can be utterly
                slow, for example reservation airline).
            </p>

            <h2>GraphQL server</h2>
            <p>
                This is why this sample has been setup. It's a showcase for
                having real modules in your graphql server.
            </p>

            <ul>
                <li>
                    TODO: add a non open api example so its easier to run the
                    whole application locally without first registering for an
                    open api key.
                </li>
            </ul>

            <h3>Links</h3>

            <ul>
                <li>
                    <a href="https://github.com/maapteh/graphql-modules-app">
                        github repo with all code for this application
                    </a>
                </li>
                <li>
                    <a href="https://graphql-server-schiphol.herokuapp.com/graphql">
                        graphql playground is activated for demonstration
                        purpose
                    </a>
                </li>
                <li>
                    <a href="https://graphql-modules.com/">
                        server runs with graphql-modules.com
                    </a>
                </li>
            </ul>

            <p>
                <i>
                    This application is using the free open api of{' '}
                    <a href="https://bol.com">bol.com</a> at the moment for the
                    products part. Some other parts will have mocked data so
                    without a key you can still play arround.
                </i>
            </p>
        </div>
    </App>
);
