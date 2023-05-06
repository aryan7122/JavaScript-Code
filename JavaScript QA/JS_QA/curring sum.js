function getSum(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    console.log(a+b+c+d+e);
                }
            }
        }
    }
}
getSum(1)(2)(3)(4)(5);

//E6 arro funcion in

const getsum = (a) => (b) => (c) => (d) => (e) => a+b+c+d+e;
const totle = getsum(6)(7)(8)(9)(0);
console.log(totle);