// keys() 获取数组的索引迭代器
// entries() 获取数组的索引与值的迭代器

let arr = [1,'a','1',23,NaN];

let arrKeys = arr.keys();
let arr2 = arr.entries();

console.log(arrKeys);
console.log(arr2);

for(let item of arrKeys){
    console.log(item)
}

for(let item of arr2){
    console.log(item)
}