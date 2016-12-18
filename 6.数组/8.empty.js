// for in 遍历数组
// for of 遍历数组

let arr = [1,2,3,4,5];
arr.ccc = 'ccc';

//for in
for(let i in arr){
    if(i === 3){ //不能用 ===
        break;
    }
    console.log(arr[i], typeof i);
}

//for of
console.log('\nfor of');
for(let item of arr){
    if(item === 3){
        break;
    }
    console.log(item);
}