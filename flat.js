//flat()
// return new arrat with all sub-array elements upto specified depth, depth as input

Array.prototype.myFlat = function(depth=1){
    // NEED to understand Recursion
    let result = []
    if(depth===Infinity){
        depth = Number.MAX_SAFE_INTEGER
    }
    for(let i = 0; i<this.length; i++){

        if(Array.isArray(this[i]) && depth>0){
            result = result.concat(this[i].myFlat(depth-1))
        }else{
            result.push(this[i])
        }
    } 

    return result
}

const arr = [1,[2,6,8,[1,2],10]]
console.log(arr.myFlat(2))