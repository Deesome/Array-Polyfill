//Push()
// Signature :  Add the values to the last and return the new length of the array, multiple values can be added  



Array.prototype.myPush = function(...values){
    let length = this.length

    for(let i=0; i<values.length;i++){
        
        this[length] = values[i]
        length++

    }

    return length
}

const animals = ["pigs", "goats", "sheep"];


const count = animals.push("camles","lion")
console.log(count)
console.log(animals)



