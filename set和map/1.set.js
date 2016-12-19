/**
 * Created by 51621 on 2016/12/19.
 */
/*
* set 是一个不重复的数组
* map 的key只能是字符串或symbol
* */

var obj = {a: 'a'};
var site1 = new Set([obj, obj, NaN, NaN, +0, -0, {}, {}, null, null, undefined, undefined]);
//若有重复 则只保存第一个

console.log(site1, site1.size, site1.length);

let res = site1.add(123);
console.log(res,[1,2,3]);

let res2 = site1.delete(123);   //删除某个值 删除成功返回true 会改变原set
let res3 = site1.delete({});    //无法删除空对象 {} ！= {}
let res4 = site1.has(null);    //检查set中是否存在某个值

console.log(res2,res3,res4,site1);

console.log(site1.entries(),666);   //实际是个迭代器

let ents = site1.entries();
for (let item of ents) {
    console.log(item)
}

//拓展运算符 ...是使用了for of的遍历方式
let set = new Set(['a','b','c']);
let arr = [...set];
console.log(arr);