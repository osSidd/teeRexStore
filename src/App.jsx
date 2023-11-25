import React, { Suspense } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.scss'
import Navbar from "./components/navbar/navbar"

const ProductsPage = React.lazy(() => import('./pages/products/products'))
const CartPage = React.lazy(() => import('./pages/cart/cart'))

import useFetch from "./hooks/useFetch"
import ErrorBoundary from "./error/errorBoundary"

export default function App(){

    const {productsPage, cartPage} = useFetch()

    return (
        <div id="sports">
            <BrowserRouter>
                <ErrorBoundary>
                    <Navbar cart={cartPage.cart}/>
                </ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<ProductsPage products={productsPage}/>}/>
                        <Route path="cart" element={<CartPage cartPage={cartPage} />}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}