import React from "react"
import './navbar.scss'
import { Link } from "react-router-dom"

export default function Navbar({cart}){

    return (
        <div className="navbar">
            <Link to="/" className="logo-heading">TeeRex Store</Link>
            
            <Link to="/cart" className="products">
            
                <span className="title">Products</span>
                <div className="cart-container">
                    <span className="qty">{cart.length}</span>
                    <i className="cart fa fa-cart-plus"></i>
                </div>
            </Link>
        </div>
    )
}