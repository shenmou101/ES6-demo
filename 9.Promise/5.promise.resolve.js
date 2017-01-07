/**
 * Created by 51621 on 2016/12/22.
 */

'use strict';

/*//demo1
let p1 = Promise.resolve('success1');   //立即返回一个状态为resolve的实例
let promiseIns1 = new Promise((resolve, reject) => {
    resolve('success1')
});*/

//demo2
/*let p2Ins = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 'success2');
});
let p2 = Promise.resolve(p2Ins);    //当参数是promise实例 会原封不动的返回
p2.then((value) => {
    console.log(value);
});*/

//demo3
//let thenableObj = {};
//thenableObj.then = (resolve, reject) => {
//    setTimeout(resolve, 1000, 'success3')
//};
//let p3 = Promise.resolve(thenableObj);
//p3.then((value) => {
//    console.log(value);
//    debugger;
//});

//demo4
let p4 = Promise.resolve(); //不传参数 视为传入undefined的resolve状态的Promise then会立即执行
p4.then((value) => {
    console.log(value);
    debugger;
});