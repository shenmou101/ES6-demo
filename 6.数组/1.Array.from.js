// Array.from
//把 类数组 转化为数组
//JS里引用类型分两种 数组和对象
//类数组包括 querySelector获取的 getElementsByClassName 字符串。 他们有.length和[i]取值 但是没有数组的方法
//数据包括线性和非线性 数组属于线性（可用[i]） object属于非线性（不可用[i] 乱序）

let arr = [1,2,3];
let arr2 = arr;
//let arr3 = arr.slice(0);  //深拷贝一个数组

//复制有深拷贝和浅拷贝 浅拷贝不能影响引用类型（obj）的改变，例如直接复制给变量
let obj = {
    a:'a',
    b:'b'
};
arr = [1,2,3,obj];
let arr4 = Array.from(arr);

arr[0] = 111;   //数组是引用类型 一个改变会改变所有引用
obj.c = 'c';

// console.log(arr,arr4);

let bodyDom = document.querySelectorAll('body');
let bodyArr = Array.from(bodyDom || []);    //当bodyDom为undefined 增强鲁棒性
console.log(bodyArr);
