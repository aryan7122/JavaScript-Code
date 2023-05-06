const arr = [12, 3, 5, 89, 1];
const getsmall = (arr) => {
    let smallnum = Number.POSITIVE_INFINITY;
    for (const num of arr) {
        if (num < smallnum) {
            smallnum = num;
        }
    }
    return smallnum;
};
 getsmall(arr);