import React from 'react';
import Product from "../Product/Product";
import s from './ProductList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Bll/store";
import {ProductType, setCurrentPageAC, setPageSizeAC} from "../../Bll/product-reducer";
import Paginator from "../Paginator/Paginator";
import {Dispatch} from "redux";
import Select from "../Select/Select";
import SelectForFilter from '../Select/SelectForFilter';

const ProductList = () => {

    const dispatch = useDispatch<Dispatch>()



    const currentPage = useSelector<AppStateType, number>(state => state.product.currentPage)

    const pageSize = useSelector<AppStateType, number>(state => state.product.pageSize)

    const totalProductCount = useSelector<AppStateType, number>(state => state.product.totalProductsCount)

    const products = useSelector<AppStateType, ProductType[]>(state => state.product.products.slice(0, pageSize))

    const handleSelectChange = (value: number) =>{
        dispatch(setPageSizeAC(value))
    }


    const changeCurrentPage =(value: number)=>{
        dispatch(setCurrentPageAC(value))
    }

    return (
        <div className={s.mainContainer}>

            <div className={s.headerProductList}>
                <div className={s.text}>Дата</div><div className={s.text}>Название</div><div className={s.text}>Количество</div><div className={s.text}>Расстояние</div>
            </div>
            <div>Параметры фильтра: <SelectForFilter /></div>
            <div className={s.productContainer}>
            {products.map(el => {
                return <Product product={el}/>
            })}
            </div>
            <Paginator currentPage={currentPage} totalItemsCount={totalProductCount} pageSize={pageSize} portionSize={3} changePageNumber={changeCurrentPage} />
            <Select selectValue={pageSize} handleSelectChange={(value)=>{handleSelectChange(value)}}/>
        </div>
    );
};

export default ProductList;