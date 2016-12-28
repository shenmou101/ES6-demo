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

//谁快执行谁 谁的reject和resolve先触发就先进then或catch
Promise.race([promiseIns1, promiseIns2, promiseIns3, promiseIns4])
    .then((value) => {  //触发的那个实例传来的
        console.log(value);
        debugger;
    })
    .catch((err) => {
        console.log(err);
        debugger;
    });
//chrome支持同时上传的数量是6 IE是4 超过则捕获不到错误 若用户一下上传100个文件 则每次只发两个请求 第1个完成则触发第3个


