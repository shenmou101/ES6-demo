/**
 * Created by 51621 on 2016/11/9.
 */
// TypeScript
let x = 1;
function add(x, y) {     //语法糖:给x y赋初始值 鲁棒性强
    x = 3;
    return x + y;
}

let res = add(1,2);
console.log(res);