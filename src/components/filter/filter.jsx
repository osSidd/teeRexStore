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
                                <li key={val}>
                                    <input type="checkbox" name="filter" id={val} onChange={handleChange}/>
                                    <label htmlFor={val}>{val}</label>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    )
}