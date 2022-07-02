import React, {ChangeEvent, useState} from 'react';
import s from './SelectForFilter.module.css'
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {
    FilterType, removeFilterAC,
    searchCountMinMaxAC, searchDistanceMinMaxAC,
    searchTitleAC,
    setFilterCountAC,
    setFilterTitleAC
} from "../../Bll/product-reducer";

type SelectValueType = {
    selectValue?: number
    handleSelectChange?: (value: number) => void
}

const SelectForFilter = ({selectValue, handleSelectChange}: SelectValueType) => {

    const dispatch = useDispatch<Dispatch<any>>()
    const [toggle, setToggle] = useState<boolean>(false)
    const [toggleSecond, setToggleSecond] = useState<boolean>(false)
    const [searchTitleValue, setSearchTitleValue] = useState<string>('')

    const [countValueMin, setCountValueMin] = useState<string>('')
    const [countValueMax, setCountValueMax] = useState<string>('')

    const [distanceValueMin, setDistanceValueMin] = useState<string>('')
    const [distanceValueMax, setDistanceValueMax] = useState<string>('')

    const [error, setError] = useState<string | null>('')

    const setToggleHandler = () => {
        setToggle(!toggle)
    }

    const setToggleSecondHandler = () => {
        setToggleSecond(!toggleSecond)
    }

    const onClickHandler = (value: FilterType) => { //сюда придет значение по которому осуществим фильтрацию по числовым значениям
        dispatch(setFilterCountAC(value))
        setToggle(!toggle)
    }

    const setFilterTitle = (value: FilterType) => { // //сюда придет значение по которому осуществим фильтрацию по текстовым значениям
        dispatch(setFilterTitleAC(value))
        setToggle(!toggle)
    }

    const searchTitleValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTitleValue(e.currentTarget.value)
        setToggle(!toggle)
    }

    const searchTitle = () => {
        dispatch(searchTitleAC(searchTitleValue))
        setToggleSecond(!toggleSecond)
    }

    const filterCountMinMax = () => {
        if(Number(countValueMax) && Number(countValueMin)) {
            dispatch(searchCountMinMaxAC(countValueMin, countValueMax))
            setToggleSecond(!toggleSecond)
            setCountValueMin('')
            setCountValueMax('')
        }else{
            setError('Введите число')
        }
    }

    const filterDistanceMinMax = () => {
        if(Number(distanceValueMax) && Number(distanceValueMin)) {
            dispatch(searchDistanceMinMaxAC(distanceValueMin, distanceValueMax))
            setDistanceValueMax('')
            setDistanceValueMin('')
            setToggleSecond(!toggleSecond)
        }else{
            setError('Введите число')
        }

    }

    const removeFilter =()=>{
        dispatch(removeFilterAC())
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.firstFilter}>
                <div className={s.title} onClick={setToggleHandler}>ФИЛЬТР</div>
                {toggle &&
                <div className={s.itemBlock}>
                    <div className={s.item} onClick={() => {
                        setFilterTitle('title')
                    }}>Название
                    </div>
                    <div className={s.item} onClick={() => {
                        onClickHandler('count')
                    }}>Количество
                    </div>
                    <div className={s.item} onClick={() => {
                        onClickHandler('distance')
                    }}>Расстояние
                    </div>
                </div>
                }

            </div>
            <div className={s.secondFilter}>
                <div className={s.titleSecondFilter} onClick={setToggleSecondHandler}>ФИЛЬТР +</div>
                {toggleSecond &&
                <div className={s.itemBlockSecondFilter}>
                    <div className={s.item}>Название: <input value={searchTitleValue}
                                                             onChange={searchTitleValueHandler}/>
                        <button onClick={searchTitle}>+</button>
                    </div>
                    <div className={s.item}>Количество: от <input className={s.inputNumber} onChange={(e)=>{setCountValueMin(e.currentTarget.value)}}
                                                                  value={countValueMin}/> до: <input
                        className={s.inputNumber} onChange={(e)=>{setCountValueMax(e.currentTarget.value)}} value={countValueMax}/>
                        <button onClick={filterCountMinMax}>+</button>
                    </div>
                    <div className={s.item}>Расстояние: от <input onChange={(e)=>{setDistanceValueMin(e.currentTarget.value)}} className={s.inputNumber}/> до:
                        <input onChange={(e)=>{setDistanceValueMax(e.currentTarget.value)}}
                        className={s.inputNumber}/><button onClick={filterDistanceMinMax}>+</button></div>
                    {error && <div>{error}</div>}
                </div>

                }
            </div>
            <div className={s.titleRemoveFilter} onClick={removeFilter}>сбросить фильтр</div>
        </div>
    );
};

export default SelectForFilter;