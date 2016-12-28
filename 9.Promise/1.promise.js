/**
 * Created by 51621 on 2016/12/22.
 */
// promise的唯一性，不受外界改变，并且任何时候都不会改变
// Promise 本身是一个构造器 会立刻执行
// 有三种状态 pending resolve reject 状态变化方向固定不可逆-有限状态机
// 经常作为函数的返回值
'use strict';
/*
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
},2000);*/

let ajaxPromise = (queryUrl) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', queryUrl, true);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.responseText)
                }
            }
        }
    })
};
let ajaxResPromise = ajaxPromise('https://api.github.com/');    //请求于此时发出
ajaxResPromise
    .then((value) => {
        console.log(ajaxResPromise);
        console.dir(ajaxResPromise);
        console.log(value);
    })
    .catch((err) => {
        console.error(err);
    });

// 1.Promise内部的resolve方法运行导致Promise实例的状态发生改变
// 2.状态从pending变成resolve
// 3.当状态从pending变到resolve的时候，Promise实例的then方法会被Promise运行

