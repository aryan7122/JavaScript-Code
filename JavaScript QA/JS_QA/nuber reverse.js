var num = -123;
// const a =0;
var revnum = num.toString().split("").reverse().join("");
if(revnum.endsWith("-")){
    revnum = "-"+revnum;
    const a = parseInt(revnum);
    console.log(a);
}else{
    const a = parseInt(revnum);
    console.log(a);
}