var a = 10;
var b = 30;

[a, b] = [b, a]
console.log("a = " + a);
console.log("b = " + b);

//////////////other////////////////

var c = 10;
var d = 30;
var temp;

//swap variables
temp = c;
c = d;
d = temp;

console.log("c = " + c);
console.log("d = " + d);
