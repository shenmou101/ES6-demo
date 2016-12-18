// find findIndex

let arr = [1,'a','1',23,NaN];

let res = arr.indexOf(NaN); //原理是== 而NaN!=NaN 所以永远找不到
let res2 = arr.includes(NaN);   //可以找到NaN

console.log(res,res2);