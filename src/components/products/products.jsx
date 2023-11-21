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
                    <h3>{item.name}</h3>
                    <span style={{color:'crimson'}}>{item.quantity <=3 && item.quantity ? `only ${item.quantity} left in stock` : null}</span>
                    <div className="price-btn">
                        <span className="price">Rs {item.price}</span>
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