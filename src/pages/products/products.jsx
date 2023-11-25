import React from "react"
import './products.scss'
import { debounce } from "../../utils/functions"
import ErrorBoundary from '../../error/errorBoundary'

import Search from '../../components/search/search'
import Products from '../../components/products/products'
import Filter from '../../components/filter/filter'

export default function ProductsPage({products}){

    const {
        displayData, 
        filterKeys, 
        filterObj, 
        mobileFilter, 
        handleSearch, 
        filterData, 
        addToCart, 
        toggleCartQty, 
        setFilterDisplay
    } = products

    return (
        <>
            <ErrorBoundary>
                <div className="search-filter">
                    <Search handleChange={debounce(handleSearch, 750)}/>
                    <span><i className="filter-icon fa fa-filter" onClick={setFilterDisplay}></i></span>
                </div>
                <div className="filter-product">
                    <Products clothes={displayData} addToCart={addToCart} toggleCartQty={toggleCartQty}/>
                    <Filter handleChange={filterData} filterObj={filterObj} keys={filterKeys} mobileFilter={mobileFilter}/>
                </div>
            </ErrorBoundary>
        </>
    )
}