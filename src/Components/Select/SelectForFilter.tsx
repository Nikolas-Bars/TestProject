import React, {ChangeEvent, useState} from 'react';
import s from './SelectForFilter.module.css'
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {FilterType, setFilterCountAC, setFilterTitleAC} from "../../Bll/product-reducer";

type SelectValueType = {
    selectValue?: number
    handleSelectChange?: (value: number) => void
}

const SelectForFilter = ({selectValue, handleSelectChange}: SelectValueType) => {

    // const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    //     handleSelectChange(Number(e.currentTarget.value))
    // }
    const dispatch = useDispatch<Dispatch<any>>()
    const [toggle, setToggle] = useState<boolean>(false)
    const [valueFilter, setValueFilter] = useState<string>('')

    const setToggleHandler = ()=>{
        setToggle(!toggle)
    }

    const onClickHandler =(value: FilterType)=>{
        setValueFilter(value)
        dispatch(setFilterCountAC(value))
    }

    const setFilterTitle =(value: FilterType)=>{
        dispatch(setFilterTitleAC(value))
    }

    return (
        <div>
            <div className={s.title} onClick={setToggleHandler}>ФИЛЬТР</div>
            {toggle &&
                <div style={{position: "fixed", backgroundColor: 'blue', color: "white", padding: '10px', border: '1px solid yellow', borderRadius: '5px'}}>
                    Сортировать по:
                    <div className={s.item} onClick={()=>{setFilterTitle('title')}}>Названию</div>
                    <div className={s.item} onClick={()=>{onClickHandler('count')}}>Количеству</div>
                    <div className={s.item} onClick={()=>{onClickHandler('distance')}}>Расстоянию</div>
                </div>
            }
        </div>
    );
};

export default SelectForFilter;