// forEach()
// Signature - no return , userFunction(value,index) as Input 

const arr = [1,2,3,4,5]

Array.prototype.myForEach = function(userFunction){
    if (typeof userFunction !== 'function') {
        throw new TypeError(`${typeof userFunction} ${userFunction} is not a function`);
    }
    for(let i=0;i<this.length;i++){
        userFunction(this[i],i)

    }

}
arr.myForEach(e=> console.log(e))
