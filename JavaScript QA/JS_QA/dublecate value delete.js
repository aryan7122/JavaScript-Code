let arr = [1,5,4,3,5,6,7,3,2,2,5,6,7,8,8,9,0,2,1,3,5,6,9,0,2];
//delete dublecate vlues
let uniqe = [...new Set(arr)];  // snew Set(arr) is Set containing all the value in arr, which dublicates remove 
console.log(uniqe);