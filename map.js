// map()
// signature : returns new array , userFunction as input (value.index)

Array.prototype.myMap = function(userFunction){

    const result = []
    for(let i=0;i<this.length;i++){
       const value = userFunction(this[i],i)
       result.push(value)

    }
     return result;

}

const newArr = arr.myMap(e=>e*2)
console.log(newArr)

const newArr2 = arr.myMap((value,index)=> value + index)
console.log(newArr2)