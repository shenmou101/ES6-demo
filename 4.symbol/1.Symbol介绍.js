/**
 * Created by 51621 on 2016/11/24.
 */
/*
* symbol可以确保我的程序不会被别人覆盖或修改 使用较少
* */
let syb = Symbol('sub');
let syb2 = Symbol('sub');
// console.log(syb,syb2,syb == syb2, typeof syb);
// console.log(syb.toString(),syb.toString() === syb2.toString());

let ele = {};

ele[syb] = 123; //用[]为对象定义属性 []中是表达式
ele[syb2] = 234;
console.log(ele);
