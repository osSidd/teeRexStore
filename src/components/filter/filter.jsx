import React from "react"
import './filter.scss'
import { getValues } from "../../utils/functions"

export default function Filter({handleChange, clothes, keys}){

    return (
        <div className="filter">
            {
                keys.map(item => (
                    <ul key={item}>
                        <h2>{item}</h2>
                        {
                            getValues(clothes, item).map(val => (
                                <li key={val.id}>
                                    <input 
                                        type="checkbox" 
                                        name="filter" 
                                        id={val.id} 
                                        value={val[item]}
                                        data-key={item}
                                        data-value={val[item]} 
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={val.value}>{val[item]}</label>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    )
}