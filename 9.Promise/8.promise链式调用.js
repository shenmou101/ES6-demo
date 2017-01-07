/**
 * Created by 51621 on 2017/1/2.
 */

/*
let p1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 500, 'This is resolve！');
});

p1
    .then((value) => {
        debugger;
    })
    .then((value) => {
        debugger;
        return Promise.reject('2 error')
    })
    .catch((error) => {
        debugger;
        return 'catch 2'
    })
    .then((value) => {
        debugger;
        return 'then 3'
    })
    .catch((error) => {
        debugger;
    });*/

//链式调用的例子
function ajaxPromise () {
    return new Promise((resolve,reject) => {
        //...初始化请求
        resolve(xhr.responseText)
    })
}