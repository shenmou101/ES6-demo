/**
 * Created by 51621 on 2016/11/9.
 */
function add(a,...arg) {    //...代表囊括后面所有参数的数组
    //debugger  //加断点;
    let res = 0;
    /*for(let i = 0, len = arg.length; i < len; i++){
        res += arg[i];
    }*/
    for(let i = arg.length-1; i >= 0; i--){     //最优for循环 计算机和0比较是最快的
        res += arg[i];
    }
    return res;
}

let res = add(1,3,4,5);
console.log(res);