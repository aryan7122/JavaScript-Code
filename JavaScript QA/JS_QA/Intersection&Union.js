const arr1 = [1,2,3,4,5]; 
const arr2 = [3,4,5,6,7];

//find the Intersection (Coman number)
//3,4,5
const IntersectionArr = arr1.filter((curElm) => {
    return arr2.includes(curElm);
});
console.log(IntersectionArr); // [ 3, 4, 5 ]

//find the Union (Unik number)
//1,2,3,4,5,6,7
const UnionArr = [...new Set([ ...arr1, ...arr2])];
console.log(UnionArr); // [1, 2, 3, 4, 5, 6, 7]