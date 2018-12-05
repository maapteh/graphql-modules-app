import * as React from 'react';
import App from '../components/App';
import { Product } from '../components/product/product';

export default class extends React.Component {
    static getInitialProps({ query: { id } }) {
        return { id };
    }

    render() {
        return (
            <App>
                <div className="content__section">
                    <Product id={this.props.id} />
                </div>
            </App>
        );
    }
}
