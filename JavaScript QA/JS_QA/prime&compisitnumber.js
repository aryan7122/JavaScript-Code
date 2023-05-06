// prime number is itSelf /
var n = 12;
for(let i = 2; i<n; i++){
    if (n%i==0){
        console.log("it a not prime number")
        break;
    }
    else{
        console.log("it a prime number")
        break;
    }
}

// composition number is any /

for(let j = 2; j<n; j++){
if (n%j==0){
        console.log("it a  composition number")
        break;
    }else{
        console.log("it a not composition number")
        break;
    }
}
