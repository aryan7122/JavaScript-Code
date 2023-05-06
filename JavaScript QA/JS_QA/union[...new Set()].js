// remove dublecate value
const num1 = [1,2,3,4,5];
const num2 = [1,2,6,7,8];
const sum = num1.concat(num2);//
console.log(sum);             //
            //  or  //          
    console.log([...num1,...num2]);
    //[...new Set()]
    const remove = [...new Set(sum)];
    console.log(remove);