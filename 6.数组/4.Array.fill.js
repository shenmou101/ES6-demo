// Array.from
//把 类数组 转化为数组
//类数组包括 querySelector获取的 getElementsByClassName 字符串。 他们有.length和[i]取值 但是没有数组的方法
//数据包括线性和非线性 数组属于线性（可用[i]） object属于非线性（不可用[i] 乱序）

//Array.copyWithin

// Array.prototype.copyWithin(target, start = 0, end = this.length);
//target 是被覆盖的下标
//start 是截取的开始下标
//end是 截取结束的下标的后一个

let arr = [1,2,3,4,5];

arr.fill('a', 2, 4);

console.log(arr);
$.ajax('url','post',data,)