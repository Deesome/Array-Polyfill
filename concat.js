//concat()
// merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

Array.prototype.myConcat = function(...arr){

    const result = [...this]

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...arr[i])
        }else{
            result.push(arr[i])
        }
    }

    return result
}

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.myConcat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]