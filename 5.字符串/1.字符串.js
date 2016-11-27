let str = 'st\'"rr';
let str2 = "st\"'rr";   //因为html片段往往是双引号 所以建议用单引号
let htmlStr = '<div>123\
                </div>\
              ';    //换行符\
console.log(htmlStr);

let a = 'abc';
let a2 = [1,2,3];
function calc(x,y){
    return x + y;
}
let es6Str = `""''\
            $\{\}\\`;   //``字符串新写法 除了$ { } \的符号都会自动转义
let es6Str2 = `123${a+'sss'+a2[1]+calc('dd','ee')}456`;//``支持表达式${变量名,函数，数组，三元表达式}，所以上述三个符号需转义
console.log(es6Str);
console.log(es6Str2);
