import React, { Component } from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';
import ProductData from '../../data/products/productData';

class ProductContainer extends Component {
    state = {  }
    productData = new ProductData();
    
    render() { 
        return (
            <ProductGrid products = {this.productData.products}/>
        )
    }
}
 
export default ProductContainer;