/**
 * Created by 51621 on 2016/10/19.
 */
//结构赋值 变量的批量赋值
'use strict';   //编译阶段尽可能多的报错 VM2300这种一般是chrome的问题 换浏览器即可

let arr = [1, , 3];     //省略赋值
let arr2 = [1, [2.1,2.2], 3];
let arr3 = [1,2,3,4,5];
/*
//传统赋值方式
let a = arr[0];
let b = arr[1];
let c = arr[2];
*/

let [a, b, c] = arr;
let [e, f, g] = arr2;
let [h, [k,l], j] = arr2;
let [aa,bb,...other] = arr3;    //... 拓展运算符 后面的值都给我 不能放中间只能最后
console.log(a,b,c);
console.log(e, f, g);
console.log(h, k,l, j);
console.log(aa,bb,other);