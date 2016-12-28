/**
 * Created by 51621 on 2016/12/22.
 */

'use strict';

let promiseIns1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'success1');  //第3个参数作为第一个参数的参数
});

let promiseIns2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'success2')
});

let promiseIns3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'success3')
});

let promiseIns4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1500, 'success4')
});

Promise.all([promiseIns1, promiseIns2, promiseIns3, promiseIns4])   //所有promise都执行完才会触发.then() 取决于最慢的promise
    .then((value) => {  //返回的值是数组，数组的值的顺序按定义的顺序
        console.log(value);
        debugger;
    })
    .catch((err) => {
        console.log(err);
        debugger;
    })
;



