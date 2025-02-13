//findLast()
//Signature : - Iterates in rverse order and return the first element that satisfies the userFunction or undefined, userFunction(value,index) as input


Array.prototype.myFindLast = function(userFunction){

  for( let i= this.length-1;i>=0;i--){
    if(userFunction(this[i],i)){
        return this[i]
    }
  }

  return undefined


}

const array1 = [5, 12, 50, 130, 44];

const found = array1.myFindLast((element) => element > 45);

console.log(found);
// Expected output: 130