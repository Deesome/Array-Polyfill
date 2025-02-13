// filter
// signature : return new array if condition is true , userFunction(value,index) as Input



Array.prototype.myFilter = function(userFunction){
    const result = []

    for(let i = 0; i<this.length ; i++){
        if(userFunction(this[i],i)){
            result.push(this[i])
        }
    }
 return result

}

const n3 = arr.myFilter((value,index)=> value % 2 == 0)
console.log(n3)