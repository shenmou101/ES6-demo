/**
 * Created by 51621 on 2016/10/19.
 */
//结构赋值 变量的批量赋值
'use strict';

let arr = [1, , 3];
let arr2 = [1, [2.1,2.2], 3];
/*
//传统赋值方式
let a = arr[0];
let b = arr[1];
let c = arr[2];
*/

let [a, b, c] = arr;
let [e, f, g] = arr2;
console.log(a,b,c);
console.log(e, f, g);