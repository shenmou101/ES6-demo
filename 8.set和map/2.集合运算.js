/**
 * Created by 51621 on 2016/12/19.
 */
/*
* Set实现JS中的集合运算
* 集合运算有三种 并集 交集 差集
* */
let s1 = new Set([1,3,5,7]);
let s2 = new Set([1,4,5,8]);

//并集
let arr = [...s1,...s2];
let sbing = new Set([...s1,...s2]);
console.log(arr,sbing);

//交集
//let arr2 = Array.from(s1);
let sss = [...s1].filter(item => s2.has(item));
console.log(sss);

let sjiao = new Set([...s1].filter(item => s2.has(item)));
console.log(sjiao);
//差集