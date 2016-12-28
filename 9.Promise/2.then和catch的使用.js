/**
 * Created by 51621 on 2016/12/22.
 */

'use strict';

let promiseInstance = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is resolve');
        reject('This is reject');   //会执行 但没有改变状态且无作用 状态不可逆
        debugger;
    })
});

promiseInstance
    .then((value) => {
        debugger;
        console.log(value);
    })
    .catch((err) => {
        debugger;
        console.log(err);
    });

// 1.Promise内部的resolve方法运行导致Promise实例的状态发生改变
// 2.状态从pending变成resolve
// 3.当状态从pending变到resolve的时候，Promise实例的then方法会被Promise运行

