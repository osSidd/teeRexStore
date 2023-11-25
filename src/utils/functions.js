export function getValues(arr, key){
    let temp = []
    if(key === 'price'){
        temp.push({id:0, [key]:250}, {id:1, [key]:450}, {id:2, [key]:500})
        return temp
    }
    arr.forEach(item => {
        if(!temp.find(i => i[key] === item[key]))
            temp.push({id: item.id, [key]: item[key]})
    })
    return temp
}

export function debounce(fn, delay){
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay)
    }
}

export function searchItem(obj, val){
    return getLowerCase(obj.name) === getLowerCase(val) || getLowerCase(obj.color) === getLowerCase(val) || getLowerCase(obj.type) === getLowerCase(val) || getLowerCase(obj.gender) === getLowerCase(val)
}

function getLowerCase(val){
    return val.toLowerCase()
}

export function toggleQty(arr, id){
    return arr.map(item => (
        {
            ...item, 
            quantity: item.id === id ? item.quantity - 1 : item.quantity, 
            cartQty: item.id === id ?  item.cartQty + 1: item.cartQty
        }
    ))
}

export function getLabel(val){
    if(val <= 250) return 'Rs 0 - 250'
    else if(val > 250 && val <= 450) return 'Rs 251 - 450'
    return 'More than Rs 450'
}