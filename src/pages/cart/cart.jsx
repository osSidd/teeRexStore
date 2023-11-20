import React from "react";
import './cart.scss'

export default function CartPage({cartPage}){

    let total = 0
    const {cart, deleteFromCart, toggleCartQty} = cartPage    

    return (
        <div>
            <h2 className="shopping-cart">Shopping Cart</h2>
            <div className="item-container">
                {
                    cart.length ? cart.map(item => { 
                        total += item.price*item.cartQty
                        return (
                        <div key={item.id} className="items">
                            <img className="cart-img" src={item.imageURL} alt="cloth" />
                            <div className="name-price">
                                <h3>{item.name}</h3>
                                <p>Rs {item.price}</p>
                            </div>
                            <p>Qty {item.cartQty}</p>
                            <span data-type="inc-qt" data-id={item.id} onClick={toggleCartQty} className="icon">&#43;</span>
                            <span data-type="dec-qt" data-id={item.id} onClick={toggleCartQty} className="icon">&#8722;</span>
                            <button id={item.id} onClick={deleteFromCart}>delete</button>
                        </div>
                    )}) : <span style={{fontSize: '1.25rem', color: '#777'}}>Cart empty</span>
                }
            </div>
            <div className="total">
                <div><span>Total amount</span> <span>Rs {total}</span></div>
            </div>
        </div>
    )
}