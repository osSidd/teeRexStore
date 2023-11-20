import React from "react"
import './products.scss'
import { debounce } from "../../utils/functions"

import Search from '../../components/search/search'
import Products from '../../components/products/products'
import Filter from '../../components/filter/filter'

export default function ProductsPage({products}){

    const {clothes, displayData, filterKeys, handleSearch, addToCart} = products

    return (
        <>
            <Search handleChange={debounce(handleSearch, 750)}/>
            <div className="filter-product">
                <Products clothes={displayData} addToCart={addToCart}/>
                <Filter handleChange={debounce(handleSearch, 500)} clothes={clothes} keys={filterKeys}/>
            </div>
        </>
    )
}