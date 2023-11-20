import React from "react"
import './navbar.scss'

export default function Navbar({cart}){
    return (
        <div className="navbar">
            <h1>TeeRex Store</h1>
            <div className="products">
                <span className="title">Products</span>
                <div className="cart-container">
                    <span className="qty">{cart.length}</span>
                    <i className="cart fa fa-cart-plus"></i>
                </div>
            </div>
        </div>
    )
}