/**
 * Created by 51621 on 2017/1/2.
 */

//demo1
let p1 = Promise.reject('fail1');   //只支持字符串类型的参数
p1.catch((error) => {
    console.log(error);
    debugger;
});