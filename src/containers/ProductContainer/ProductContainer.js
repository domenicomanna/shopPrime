import React, { Component, Fragment } from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';
import ProductData from '../../data/products/productData';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

class ProductContainer extends Component {
    state = {}
    productData = new ProductData();

    render() {
        return (
            <Fragment>
                <SectionTitle> Shop the latest trends </SectionTitle>
                <ProductGrid products={this.productData.products} />
            </Fragment>
        )
    }
}

export default ProductContainer;