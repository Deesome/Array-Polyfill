//fndLastIndex()
// iterates in reverse order and return the index of first elemnet satisfying the userFunction or return -1. userFunction(value,index)as input

Array.prototype.myFindLastIndex = function(userFunction){

    for(let i= this.length-1;i>=0;i--){
        if(userFunction(this[i],i)){
            return i
        }
    }

    return -1

}

const array1 = [5, 12, 50, 130, 44];
console.log(array1.myFindLastIndex(value => value>45))