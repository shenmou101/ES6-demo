// Array.from
//把 类数组 转化为数组
//类数组包括 querySelector获取的 getElementsByClassName 字符串。 他们有.length和[i]取值 但是没有数组的方法
//数据包括线性和非线性 数组属于线性（可用[i]） object属于非线性（不可用[i] 乱序）

let arr = Array(2);     //只定义一个参数会定义为数组的长度
let arr2 = Array.of(2);     //可避免上述问题

console.log(arr,arr2);