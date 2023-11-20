export function getValues(arr, key){
    let temp = []
    arr.forEach(item => {
        if(!temp.includes(item[key]))
            temp.push(item[key])
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