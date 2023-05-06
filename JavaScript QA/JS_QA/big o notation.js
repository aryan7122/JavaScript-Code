console.time();//start
/////////////////////////////////////////////////////////
var arr1 = [4,3,2,1];
var arr2 = [4,3,2,1];
const iaSame = arr1.length == arr2.length && arr1.every((curEelement) => {
    let a = arr2.indexOf(curEelement);
    let b = arr2[arr2.indexOf(curEelement)]
    if(a > -1){
        return (curEelement = b);
    }
});
console.log(iaSame);
/////////////////////////////////////////////////////////////////
var a = 10;
var b = 30;

[a, b] = [b, a]
console.log("a = " + a);
console.log("b = " + b);
console.timeEnd()//end