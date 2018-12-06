import React from 'react';
import {ErrorMessage} from '../ErrorMessage';
import {GetProductComponent} from '../../lib/_generated-components';
import './product.scss';

export interface ProductProps extends React.HTMLAttributes<HTMLElement> {
  id: any;
}

export const Product = ({id, ...restProps}: ProductProps) => {
  const queryVars = {
    id: id.toString(),
  };

  return (
    <GetProductComponent variables={queryVars} {...restProps as any}>
      {({loading, error, data: {getProduct}}) => {
        if (error) return <ErrorMessage message="Error loading product." />;
        if (loading) return <div>Loading</div>;

        const image =
          getProduct &&
          getProduct.images &&
          getProduct.images.filter((i: any) => i.key === 'L')[0].url;

        return (
          <section>
            {getProduct && (
              <React.Fragment>
                <img src={image} className="product__image" />
                <h1>
                  {getProduct.title} ({getProduct.rating})
                </h1>
                <p>{getProduct.shortDescription}</p>
                <p>
                  <a href={getProduct.urls[0].value} target="_new">
                    see @bol.com
                  </a>
                </p>
              </React.Fragment>
            )}
          </section>
        );
      }}
    </GetProductComponent>
  );
};
