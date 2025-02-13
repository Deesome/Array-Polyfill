//Array.at()
//Signature : return the value , index as input ,undefined Index means at index 0

Array.prototype.myAt = function(index){
    
    if(index===undefined) index = 0;
    if(index<0) index = this.length + index

    if(index>this.length){
        return result = undefined
    }else{
        return result = this[index]
    }

}

const arr = [0,1,2,3,4]
console.log(arr.at(1))  // 1
console.log(arr.myAt(1))  //1

console.log(arr.at(-2))  // 3
console.log(arr.myAt(-2)) // 3

console.log(arr.at(6))  // undefined
console.log(arr.myAt(6)) // undefined

console.log(arr.at())   // 0
console.log(arr.myAt()) // 0

console.log(arr.at(-7))  // undefined
console.log(arr.myAt(-7)) // undefined

