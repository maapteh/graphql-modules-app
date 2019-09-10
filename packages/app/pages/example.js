import { App } from '../components/App';
import { withApollo } from '../graphql/apollo';

const Index = () => (
    <App>
        <h1>Showcase GraphQL</h1>

        <h2>GraphQL server</h2>
        <p>
            This is why this sample has been setup. It&apos;s a showcase for
            having real modules in your graphql server.
        </p>

        <h2>React client</h2>
        <p>
            NextJS is used because it gives a setup in which it&apos;s esy to
            have an isomorphic application without too much code. This way there
            is more focus on the GraphQL part.
        </p>
        <p>
            We only need to provide an Apollo client with the React application
            . Now we are able to have control if component needs to be rendered
            server or client side and also we can debatch the component (mostly
            on components where the data can be utterly slow, for example
            reservation airline).
        </p>

        <h3>Links</h3>

        <ul>
            <li>
                <a href="https://github.com/maapteh/graphql-modules-app">
                    github repo with all code for this application
                </a>
            </li>
            <li>
                <a href="https://graphql-server-schiphol.herokuapp.com/graphql">
                    graphql playground is activated for demonstration purpose
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
                products part. The development version can also be run in mock
                mode, no keys required.
            </i>
        </p>
    </App>
);

export default withApollo(Index);
