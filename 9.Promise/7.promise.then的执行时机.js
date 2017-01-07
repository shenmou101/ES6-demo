/**
 * Created by 51621 on 2017/1/2.
 */

//demo1
/*let p1 = Promise.resolve('success1');

p1.then((value) => {
    console.log(value);
});

console.log('This is out!');*/

//demo2
setTimeout(() => {
    console.log('This is in setTimeout!');
},0);   //优先级最低 放在回调执行队列的最后

let p2 = new Promise((resolve, reject) => {
    console.log('This is in!');
    resolve('This is resolve!')
});

p2.then((value) => {
    console.log(value)
});

console.log('This is out!');

