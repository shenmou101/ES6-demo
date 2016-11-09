// TypeScript
function add(x = 0,y = 0) {     //语法糖:给x y赋初始值 鲁棒性强
    /*if(!y){
        y = 0;
    }*/
    /*y || (y = 0);*/
    if(typeof y === 'undefined'){
      y = 0;
    }
    return x + y;
}

let res = add(4);
console.log(res);