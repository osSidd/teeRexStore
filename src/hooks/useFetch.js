import { useState, useEffect } from "react"

import { searchItem } from "../utils/functions"

export default function useFetch(){

    const [clothes, setClothes] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [cart, setCart] = useState([])

    const filterKeys = ['color', 'gender', 'price', 'type']

    useEffect(() => {
        fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
            .then(res => res.json())
            .then(data => {
                setClothes(data)
                setDisplayData(data)
            })
    }, [])

    function addToCart(e){
        const id = parseInt(e.target.id)
        const item = clothes.find(item => item.id === id)
        if(item.quantity){
             setCart(prev => ([...prev, item]))
             const temp = clothes.map(item => ({...item, quantity: item.id === id ? item.quantity - 1 : item.quantity}))
            setClothes(temp)
            setDisplayData(temp)
        }
    }

    function handleSearch(e){
        let value = ''
        
        if(e.target.type === 'checkbox') value = e.target.checked ? e.target.id : ''
        
        else value = e.target.value
        
        if(!value) setDisplayData(clothes)

        else setDisplayData(clothes.filter(item => searchItem(item, value)))
    }

    return {
        clothes,
        displayData,
        cart,
        filterKeys,
        handleSearch,
        addToCart,
    }
}