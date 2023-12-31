import React from "react";
import './products.scss'

export default function Products({clothes, toggleCartQty, addToCart}){

    return (
        <div className="tShirt-container">
        {
            clothes.length ? clothes.map(item => (
                <div className="shirt-box" key={item.id}>
                    <img className="shirt-img" src={item.imageURL} alt="cloth" />
                    <div style={{margin:'1.5rem 0 0.5rem 0'}}><span style={{fontSize:'1.5rem'}}>{item.name}</span> (<small>{item.gender}</small>)</div>
                    <span style={{color:'crimson'}}>{item.quantity <=3 && item.quantity ? `only ${item.quantity} left in stock` : null}</span>
                    <div className="price-btn">
                        <span className="price">Rs {item.price}</span>
                        {
                            item.cartQty && item.quantity ? 
                            
                            <div className="toggle-qty">
                                <span data-type="inc-qt" data-id={item.id} onClick={toggleCartQty} className="icon">&#43;</span>
                                {item.cartQty}
                                <span data-type="dec-qt" data-id={item.id} onClick={toggleCartQty} className="icon">&#8722;</span>
                            </div> : 
                            
                            <button 
                                id={item.id} 
                                onClick={addToCart}
                                disabled={!item.quantity}
                            >
                                {item.quantity > 0 ? 'Add to cart' : 'Out of stock'}
                            </button>
                        }
                    </div>
                </div>

            )) : <div style={{color:'#aaa', fontSize:'2rem'}}>Nothing in store</div>
        }
        </div>
    )
}