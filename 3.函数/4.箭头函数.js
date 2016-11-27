/**
 * Created by 51621 on 2016/11/13.
 */


let func = function (a) {
  return a+1;
};

/*let fun2 = (a) => {
    return a+1;
};*/

let fun2 = a => a+1;

let res1 = fun2(1);
let res2 = fun2(2);

console.log(res1,res2);

let arr = [1,3,45,56];
/*let r1 = arr.map((item,index,arr) => {
    return item*item;
});*/
let r1 = arr.map(item => item*item);
console.log(r1);

/*function func2 (){
    /!*setTimeout(function () {
        console.log(this.id);
    }.bind(obj))    //调用bind给function的this设置值 否则console的this是window*!/
    setTimeout(() => {console.log(this.id)})    //箭头函数没有bind apply call
}
let obj = {id:22};

func2.call(obj);*/

let obj = {
    id: 123,
    fun1: function(){
        setTimeout(function () {
            console.log(this.id)
        })
    },
    fun2:function(){    //function的this是函数运行时的上下文
        setTimeout(() => {
            console.log(this.id)
        })
    },
    fun3:() => {    //箭头函数的this是函数定义时的上下文（即定义obj时所在的全局环境window）而不是函数运行时的上下文
        setTimeout(() => {
            console.log(this.id);
        })
    }
};

obj.fun1();
obj.fun2();
obj.fun3();