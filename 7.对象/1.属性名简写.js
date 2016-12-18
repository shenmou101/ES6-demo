// for in 遍历数组
// for of 遍历数组

/*
let obj = {
    a:'a',
    b:'b',
    'c':'c'     //没有语法错误 但是代码尽量风格统一
};
*/

let a = 'a';
let b = 'b';
let c = [1,33,2];
let para = 'ddd';

let obj = {
    a,  //a作为key 他的值是变量a的值
    b,
    c,
    [para]:123
};

function func (){
    return {a,b,c};
}

let obj2 = {
  add () {  //新写法 同上 只是值是function
      return 123
  }
};
console.log(obj);

