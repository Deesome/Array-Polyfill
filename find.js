// Array.find()
// Signature - return the first element or undefined ,userFunction(value,index) as input 

Array.prototype.myFind = function(userFunction){

    for(let i=0;i<this.length;i++){
        // console.log("Checking at index",i)
        if(userFunction(this[i],i)){
            return this[i]

        }
    }
    return undefined;

}

const array1 = [5,12, 8, 130, 44];

const found = array1.myFind((element) => element > 140);
const found1 = array1.find((element) => element > 140);

console.log(found);
console.log(found1)