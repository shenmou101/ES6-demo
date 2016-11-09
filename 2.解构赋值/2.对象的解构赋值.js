'use strict';
//解构赋值 把右侧的数据类型赋值到左侧构造的相似的数据类型中
let obj = {     //对象是无序的非线性的哈希值
    a:'a',
    b:'b',
    c:'c',
    arr:[1,2,3,{a:444}]
};

let {x,y,z} = obj;
let {a,b,c} = obj;
let {a:mya,b:myb,c:myc,arr:[,,num3,{a:inA}]} = obj;  //数据重命名 嵌套解构
console.log(x,y,z);
console.log(a,b,c);
console.log(mya,myb,myc,num3,inA);