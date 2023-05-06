function addNumber(a,b,c,...other){
    console.log(other);
    console.log(other[1]);
    return a+b+c+" "+other;
}
var rest = addNumber(2,3,1,5,3,8);
console.log(rest);