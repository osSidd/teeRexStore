import React from "react"
import './search.scss'

export default function Search({handleChange}){
    return (
        <div>
            <input 
                className="search" 
                type="search" 
                name="search" 
                id="search"
                onChange={handleChange} 
                placeholder="search for products..."
            />
        </div>
    )
}