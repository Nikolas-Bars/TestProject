const initialState: StateType = {
    products: [
        {id: 1, data: '24.09.2012', title: 'BMW', count: '1', distance: '1000'},
        {id: 2, data: '24.08.2011', title: 'BMW', count: '4', distance: '10000'},
        {id: 3, data: '24.07.2011', title: 'Audi', count: '3', distance: '1200'},
        {id: 4, data: '24.06.2001', title: 'Tesla', count: '5', distance: '1500'},
        {id: 5, data: '24.05.2010', title: 'Toyota', count: '12', distance: '6000'},
        {id: 6, data: '24.04.2013', title: 'Acura', count: '311', distance: '1900'},
        {id: 7, data: '24.03.2015', title: 'Bentley', count: '13', distance: '10120'},
        {id: 8, data: '24.02.2016', title: 'CHEVROLET', count: '51', distance: '11200'},
        {id: 9, data: '24.01.2017', title: 'CHERY', count: '45', distance: '1090'},
        {id: 10, data: '23.09.2013', title: 'CHRYSLER', count: '32', distance: '3600'},
        {id: 11, data: '22.09.2017', title: 'CITROEN', count: '33', distance: '3900'},
        {id: 12, data: '21.08.2021', title: 'DAEWOO', count: '45', distance: '4500'},
        {id: 13, data: '11.07.2020', title: 'DACIA', count: '48', distance: '12300'},
        {id: 14, data: '10.06.2021', title: 'DAEWOO', count: '96', distance: '9800'},
        {id: 15, data: '09.05.2020', title: 'CITROEN', count: '87', distance: '98000'},
        {id: 16, data: '07.03.2021', title: 'CHRYSLER', count: '86', distance: '2300'},
        {id: 17, data: '07.05.2021', title: 'CHERY', count: '36', distance: '13200'},
        {id: 18, data: '06.09.2014', title: 'CHEVROLET', count: '13', distance: '89600'},
        {id: 19, data: '05.07.2019', title: 'Bentley', count: '96', distance: '23600'},
        {id: 20, data: '04.04.2014', title: 'Acura', count: '58', distance: '6900'},
        {id: 21, data: '03.03.2017', title: 'Toyota', count: '57', distance: '98600'},
        {id: 22, data: '02.04.2013', title: 'Tesla', count: '53', distance: '98600'},
        {id: 23, data: '01.03.2015', title: 'Audi', count: '65', distance: '213600'},
        {id: 24, data: '24.09.2012', title: 'BMW', count: '64', distance: '1000'},
        {id: 25, data: '24.08.2011', title: 'BMW', count: '58', distance: '10000'},
        {id: 26, data: '24.07.2011', title: 'Audi', count: '68', distance: '1200'},
        {id: 27, data: '24.06.2001', title: 'Tesla', count: '32', distance: '1500'},
        {id: 28, data: '24.05.2010', title: 'Toyota', count: '23', distance: '6000'},
        {id: 29, data: '24.04.2013', title: 'Acura', count: '47', distance: '1900'},
        {id: 30, data: '24.03.2015', title: 'Bentley', count: '123', distance: '10120'},
        {id: 31, data: '24.02.2016', title: 'CHEVROLET', count: '78', distance: '11200'},
        {id: 32, data: '24.01.2017', title: 'CHERY', count: '87', distance: '1090'},
        {id: 33, data: '23.09.2013', title: 'CHRYSLER', count: '97', distance: '3600'},
        {id: 34, data: '22.09.2017', title: 'CITROEN', count: '24', distance: '3900'},
        {id: 35, data: '21.08.2021', title: 'DAEWOO', count: '26', distance: '4500'},
        {id: 36, data: '11.07.2020', title: 'DACIA', count: '12', distance: '12300'},
        {id: 37, data: '10.06.2021', title: 'DAEWOO', count: '2', distance: '9800'},
        {id: 38, data: '09.05.2020', title: 'CITROEN', count: '56', distance: '98000'},
        {id: 39, data: '07.03.2021', title: 'CHRYSLER', count: '62', distance: '2300'},
        {id: 40, data: '07.05.2021', title: 'CHERY', count: '63', distance: '13200'},
        {id: 41, data: '06.09.2014', title: 'CHEVROLET', count: '23', distance: '89600'},
        {id: 42, data: '05.07.2019', title: 'Bentley', count: '78', distance: '23600'},
        {id: 43, data: '04.04.2014', title: 'Acura', count: '75', distance: '6900'},
        {id: 44, data: '03.03.2017', title: 'Toyota', count: '71', distance: '98600'},
        {id: 45, data: '02.04.2013', title: 'Tesla', count: '72', distance: '98600'},
        {id: 46, data: '01.03.2015', title: 'Audi', count: '364', distance: '213600'},
    ],
    currentPage: 1,
    pageSize: 10,
    totalProductsCount: 46,
    filter: null
}

export type StateType = {
    products: ProductType[],
    currentPage: number,
    pageSize: number,
    totalProductsCount: number
    filter: FilterType | null
}

export type ProductType = {
    id: number
    data: string
    title: string
    count: string
    distance: string
}
export type FilterType = 'title' | 'count' | 'distance'

export const productReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
                pageSize: state.pageSize,
                products: initialState.products.slice(action.currentPage * state.pageSize - state.pageSize, action.currentPage * state.pageSize)
            }
        case "SET_PAGE_SIZE":
            return {...state, pageSize: action.pageSize,
                products: initialState.products.slice(initialState.currentPage * action.pageSize - action.pageSize, initialState.currentPage * action.pageSize)}
        case "SET_FILTER_COUNT":
            const sortEggsInNest =(a: ProductType, b: ProductType) => {
                return Number(a[action.filter]) > Number(b[action.filter]) ? 1 : Number(b[action.filter]) > Number(a[action.filter]) ? -1 : 0;
            }
            return {...initialState, products: state.products.sort(sortEggsInNest)}
        case "SET_FILTER_TITLE":
            const sortEggsInNest2 =(a: ProductType, b: ProductType) => {
                return a[action.filter] > b[action.filter] ? 1 : b[action.filter] > a[action.filter] ? -1 : 0;

            }
            return {...initialState, products: state.products.sort(sortEggsInNest2)}
        default:
            return {...state}
    }
}

export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setPageSizeAC = (pageSize: number) => ({type: 'SET_PAGE_SIZE', pageSize} as const)
export const setFilterCountAC = (filter: FilterType) => ({type: 'SET_FILTER_COUNT', filter} as const)
export const setFilterTitleAC = (filter: FilterType) => ({type: 'SET_FILTER_TITLE', filter} as const)

export type ActionType = ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setPageSizeAC> | ReturnType<typeof setFilterCountAC> | ReturnType<typeof setFilterTitleAC>