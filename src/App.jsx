import React from "react"

import './App.scss'
import Navbar from "./components/navbar/navbar"
import Products from "./pages/products/products"
import Filter from "./components/filter/filter"
import Search from "./components/search/search"
import { debounce } from "./utils/functions"
import useFetch from "./hooks/useFetch"

export default function App(){

    const {cart, clothes, displayData, filterKeys, handleSearch, addToCart} = useFetch()

    return (
        <div id="sports">
            <Navbar cart={cart}/>
            <Search handleChange={debounce(handleSearch, 750)}/>
            <div className="filter-product">
                <Products clothes={displayData} addToCart={addToCart}/>
                <Filter handleChange={debounce(handleSearch, 500)} clothes={clothes} keys={filterKeys}/>
            </div>
        </div>
    )
}