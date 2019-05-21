import React, { Fragment } from 'react';
import Button from '../Button/Button'
import styles from './Product.module.css';
import photo from '../../assets/images/image.jpg'

const Product = (props) => {
    return (
        <Fragment>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={photo}></img>
            </div>
            <div className = {styles.productDetails}>
                <p className = {styles.productDetail}> Suit jacket </p>
                <p className = {[styles.productDetail, styles.price].join(' ')}> $28.44</p>
                <Button>Add To Cart</Button>
            </div>
        </Fragment>
        );
    }
     
export default Product;