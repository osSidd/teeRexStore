import React from "react";
import './products.scss'

export default function Products({clothes, addToCart}){
    console.log(clothes)
    return (
        <div className="tShirt-container">
        {
            clothes.length && clothes.map(item => (
                <div className="shirt-box" key={item.id}>
                    <img className="shirt-img" src={item.imageURL} alt="cloth" />
                    <div className="price-btn">
                        <span className="price">{item.price}</span>
                        <button 
                            id={item.id} 
                            onClick={addToCart}
                            disabled={!item.quantity}
                        >
                                {item.quantity > 0 ? 'Add to cart' : 'Out of stock'}
                        </button>
                    </div>
                </div>

            ))
        }
        </div>
    )
}