//Array.every()
//Signature : - returns boolean if all the elements pass the condition,userFunction as input (value,index)

Array.prototype.myEvery = function(userFunction){

     for(let i=0;i<this.length;i++){
        console.log("Checking:", this[i]);
        if(userFunction(this[i],i)=== false){
             return false
            }
        }
        console.log("All passed, returning true");
        return true



        }

const arr = [2,4,6]
console.log(arr.every(value => value%2===0))   //true
console.log(arr.myEvery(value => value%2===0)) //true

console.log(arr.every(value => value%3===0))   //false
console.log(arr.myEvery(value => value%3===0))  //false

console.log(arr.every(value => value>4))     //false
console.log(arr.myEvery(value => value>4))  // false