for (var i=0; i<3; i++){
    console.log(i);
}

for (var i=0; i<3; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}

//闭包
for (var i=0; i<3; i++){
    ;(function (i) {
        setTimeout(function () {
            console.log(i);
        },1000);
    })(i);
}

//ES6 let
//var 定义的变量是在window上 let不是
for (let i=0; i<3; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}