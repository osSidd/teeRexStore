import React, { Suspense } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.scss'
import Navbar from "./components/navbar/navbar"

import ProductsPage from './pages/products/products'
import CartPage from "./pages/cart/cart"
import Error from "./pages/error/error"
// const ProductsPage = React.lazy(() => import('./pages/products/products'))
// const CartPage = React.lazy(() => import('./pages/cart/cart'))
// const Error = React.lazy(() => import('./pages/error/error'))

import useFetch from "./hooks/useFetch"
import ErrorBoundary from "./error/errorBoundary"
import Footer from "./components/footer/footer"

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
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <ErrorBoundary>
                <Footer/>
            </ErrorBoundary>
        </div>
    )
}