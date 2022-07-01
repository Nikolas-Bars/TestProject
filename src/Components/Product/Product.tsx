import React from 'react';
import {ProductType} from "../../Bll/product-reducer";
import s from './Product.module.css'

type PropsType = {
    product: ProductType
}

const Product: React.FC<PropsType> = (props) => {

    return (
        <div className={s.mainContainer}>
            <div className={s.text}>{props.product.data}</div><div className={s.text}>{props.product.title}</div>
            <div className={s.text}>{props.product.count}</div><div className={s.text}>{props.product.distance}</div>
        </div>
    );
};

export default Product;