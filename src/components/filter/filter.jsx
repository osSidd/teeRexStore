import React from "react"
import './filter.scss'
import { getLabel } from "../../utils/functions"

export default function Filter({handleChange, filterObj, keys, mobileFilter}){
    return (
        <div className={`filter ${mobileFilter ? 'show-filter' : 'hide-filter'}`}>
            {
                keys.map(item => (
                    <div key={item}>                        
                        <h2>{item}</h2>
                        <ul>
                        {
                            filterObj[item]?.map(val => (
                                <li key={val.id}>
                                    <input 
                                        type="checkbox"
                                        title={val[item]} 
                                        name={item} 
                                        id={val[item]} 
                                        value={val[item]}
                                        data-key={item}
                                        data-value={val[item]} 
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                    <label htmlFor={val[item]}>{item === 'price' ? getLabel(val[item]) : val[item]}</label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                ))
            }
        </div>
    )
}