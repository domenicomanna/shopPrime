import React, { Fragment } from 'react';
import Button from '../Button/Button'
import styles from './Product.module.css';

let images = require.context('../../assets/images', true);

const Product = (props) => {
    let imagePath = images(`./${props.imageName}`);

    return (
        <Fragment>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={imagePath}></img>
            </div>
            
            <div className = {styles.productDetails}>
                <p className = {styles.productDetail}> {props.description} </p>
                <p className = {styles.price}> ${props.price} </p>
                <Button>Add To Cart</Button>
            </div>
        </Fragment>
        );
    }
     
export default Product;