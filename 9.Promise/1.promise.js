/**
 * Created by 51621 on 2016/12/22.
 */
// promise的唯一性，不受外界改变，并且任何时候都不会改变
// 有三种状态 pending resolve reject 状态变化方向固定不可逆-有限状态机
'use strict';
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(123);
        //resolve(123);
        reject(123)
    }, 1000);
});

// p.then(() => {
//     console.log('succ')
// }).catch(() => {
//     console.log('err')
// });

setTimeout(() => {
    p.then((param) => {
        console.log(param, 'succ')
    }).catch((param) => {
        console.log(param, 'err')
    })
},2000);