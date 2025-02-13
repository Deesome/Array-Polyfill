//findIndex()
//Signature :  return the first index of an element or if not found return -1
// userFunction(value,index)

Array.prototype.myFindIndex = function(userFunction){

    for(let i=0;i<this.length;i++){
        if(userFunction(this[i],i)){
            return i
        }
    }

    return -1
}

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.myFindIndex(isLargeNumber));
// Expected output: 3
