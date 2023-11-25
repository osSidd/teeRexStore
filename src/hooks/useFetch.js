import { useState, useEffect } from "react"

import { getValues, searchItem, toggleQty } from "../utils/functions"

export default function useFetch(){

    const [clothes, setClothes] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [searchData, setSearchData] = useState({search:false, arr: []})
    const [cart, setCart] = useState([])
    const [filterValues, setFilterValues] = useState({})
    const [filterObj, setFilterObj] = useState({})
    const [mobileFilter, setMobileFilter] = useState(false)
    const filterKeys = ['color', 'gender', 'price', 'type']

    useEffect(() => {
        fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
            .then(res => res.json())
            .then(data => {
                const arr = data.map(item => ({...item, cartQty:0}))
                setClothes(arr)
                setDisplayData(arr)
                setFilterObj(() => {
                    let obj = {}
                    filterKeys.forEach(key => {
                        obj[key] = getValues(data, key)
                    })
                    return obj
                })
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
        let value = e.target.value.trim()
        let arr
        if(!value){
            arr = [...clothes]
            setSearchData({search: false, arr,})
        } 
        else{
            arr = [...clothes.filter(item => searchItem(item, value))]
            setSearchData({search: true, arr})
        } 

        setDisplayData(arr)
    }

    function filterData(e){
        const {checked, dataset} = e.target
        let {key, value} = dataset

        if(key === 'price') value = parseInt(value)

        if(checked)
            setFilterValues(prev => ({...prev, [key]: prev[key] ? [...prev[key], value] : [value]}))
            
        else      
            setFilterValues(prev => ({...prev, [key]: prev[key].filter(item => item !== value)}))
    }

    useEffect(() => {
        let arr = searchData.search ? [...searchData.arr] : [...clothes]
        for(let key in filterValues){
            if(filterValues[key].length)
                arr = arr.filter(item => filterValues[key].includes(item[key]))     
        }
        setDisplayData(arr)

    }, [filterValues, clothes])

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
        console.log(id, type)

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

    function setFilterDisplay(){
        setMobileFilter(prev => !prev)
    }

    return {
        productsPage:{
            clothes,
            displayData,
            filterKeys,
            filterObj,
            mobileFilter,
            filterData,
            handleSearch,
            addToCart,
            toggleCartQty,
            setFilterDisplay,
        },
        cartPage:{
            cart,
            deleteFromCart,
            toggleCartQty,
        },
    }
}