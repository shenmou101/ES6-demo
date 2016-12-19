// for in 遍历数组
// for of 遍历数组

'use strict';
// == 和 === 是相等和严格相等
//Object.is 只是更严格合理的值相等 两个对象依然是不相等的
console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));    //可以用来判断某个变量是否是NaN

console.log({} === {});
console.log(Object.is({a:1},{a:1}));    //实际比较的是地址 怎么比都不会相等
