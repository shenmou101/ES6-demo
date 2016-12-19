//Object.assign()

'use strict';
let obj1 = {x:'x'};
let obj2 = {y:'y'};
let obj3 = {z:'z'};

let obj4 = Object.assign(obj1,obj2,obj3);   //把2和3的属性追加到1上，而不会改变1原有的值
console.log(obj1,obj2,obj3,obj4,obj1 === obj4);

//实际使用场景
function Util(){}
Object.assign(Util.prototype,{
    getTime(){
        console.log(new Data, this, '---')
    }
});

let u = new Util;
console.log(u.constructor);