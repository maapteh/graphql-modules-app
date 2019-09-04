import * as React from 'react';
import { App } from '../../components/App';
import { Product } from '../../components/product/product';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        return { query };
    }
    render() {
        return (
            <App>
                <div className="content__section">
                    <Product id={this.props.query.id} />
                </div>
            </App>
        );
    }
}