/**
 * Created by 51621 on 2016/12/22.
 */

'use strict';
let p1 = Promise.resolve('success1');   //立即返回一个状态为resolve的实例
let promiseIns1 = new Promise((resolve, reject) => {
    resolve('success1')
});



