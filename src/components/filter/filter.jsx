import React from "react"
import './filter.scss'
import { getLabel } from "../../utils/functions"

export default function Filter({handleChange, filterObj, keys, mobileFilter}){
    return (
        <div className={`filter ${mobileFilter ? 'show-filter' : 'hide-filter'}`}>
            {
                keys.map(item => (
                    <ul key={item}>
                        <h2>{item}</h2>
                        {
                            filterObj[item]?.map(val => (
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
                                    <label htmlFor={val.value}>{item === 'price' ? getLabel(val[item]) : val[item]}</label>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    )
}