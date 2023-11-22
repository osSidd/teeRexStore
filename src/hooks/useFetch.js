import { useState, useEffect } from "react"

import { searchItem, toggleQty } from "../utils/functions"

export default function useFetch(){

    const [clothes, setClothes] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [cart, setCart] = useState([])
    const [filterValues, setFilterValues] = useState([])

    const filterKeys = ['color', 'gender', 'price', 'type']

    useEffect(() => {
        fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
            .then(res => res.json())
            .then(data => {
                const arr = data.map(item => ({...item, cartQty:0}))
                setClothes(arr)
                setDisplayData(arr)
            })
    }, [])

    function addToCart(e){
        
        const id = parseInt(e.target.id)
        const item = displayData.find(item => item.id === id)
        
        if(item.quantity){
             
            setCart(prev => {
                if(prev.find(prevItem => prevItem.id === item.id)) 
                    return toggleQty(prev, id)
                else
                    return [...prev, {...item, quantity: item.quantity - 1, cartQty: item.cartQty + 1}] 
             })
                         
            setClothes(prev => toggleQty(prev, id))
            setDisplayData(prev => toggleQty(prev, id))
        }
    }

    

    function handleSearch(e){
        let value = ''
        
        if(e.target.type === 'checkbox') value = e.target.checked ? e.target.value : ''
        
        else value = e.target.value.trim()
        
        if(!value) setDisplayData(clothes)

        else setDisplayData(clothes.filter(item => searchItem(item, value)))
    }

    function filterData(e){
        const {checked, dataset} = e.target
        const {key, value} = dataset

        if(checked)
            setFilterValues(prev => ([...prev, {[key]: value}]))

        else
            setFilterValues(prev => prev.filter(item => item[key] !== value))
    }

   function filter(prev, key, value){
        let temp = []
        let arr = prev.filter(item => item[key] === value)

        if(!temp.length) return arr
        
        arr.forEach(item => {
            temp = temp.filter(i => i[key] === item[key])
        })
        return temp
   }

    console.log(filterValues)

    function deleteFromCart(e, index=null){
        const id = parseInt(index || e.target.id)
        
        setCart(prev => prev.filter(item => item.id !== id))
        
        let temp = clothes.map(item => ({
            ...item,
            cartQty: item.id === id ? 0 : item.cartQty,
            quantity: item.id === id ? item.quantity + item.cartQty : item.quantity
        }))
        
        setClothes(temp)
        setDisplayData(temp)
    }

    function toggleCartQty(e){
        const {id, type} = e.target.dataset

        setClothes(prev => incDec(prev, id, type))
        setDisplayData(prev => incDec(prev, id, type))
        setCart(prev => incDec(prev, id, type))
        
        if(type==='dec-qt'){
            const item = cart.find(i => i.id === parseInt(id))
            if(item.cartQty === 1) deleteFromCart(e, id)
        }
    }

    function incDec(arr, id, type){
        id = parseInt(id)
        return arr.map(item => (
            {
                ...item, 
                quantity: item.id === id 
                            ? (type === 'inc-qt' ? decreaseQty(item, 'quantity', 'quantity') : increaseQty(item, 'cartQty', 'quantity')) 
                            : item.quantity,
                cartQty: item.id === id 
                            ? (type === 'inc-qt' ? increaseQty(item, 'quantity', 'cartQty') : decreaseQty(item, 'cartQty', 'cartQty')) 
                            : item.cartQty
            }
        ))
    }

    function increaseQty(item, testKey, opKey){
        return item[testKey] ? item[opKey] + 1 : item[opKey]
    }

    function decreaseQty(item, testKey, opKey){
        return item[testKey] > 0 ? item[opKey] - 1 : 0
    }

    return {
        productsPage:{
            clothes,
            displayData,
            filterKeys,
            filterData,
            handleSearch,
            addToCart,
        },
        cartPage:{
            cart,
            deleteFromCart,
            toggleCartQty,
        },
        cart,
    }
}