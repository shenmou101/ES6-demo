/**
 * Created by 51621 on 2016/11/24.
 */
// //根据不同情况使用有序或无序的配置
// $.ajax({        //对象是无序的
//     url: 'baidu.com',
//     type: 'get'
// });
//
// $.ajax(type,url);   //参数是有序

//第一种写法 推荐
function ajax ({method = 'get', url = 'default_url'} = {}) {
    //如果右侧没传值则从定义时的右侧值{}取 如果右侧传值则初始的右侧值会被全部忽略
    // =表示如果method属性不存在则赋值'get' null或者undefined下面是没属性的 会报错
    // params.type = params.type || 'get';  //不建议 因为当选项值是布尔值false的时候，会把后面的值激活
    // params.url = params.url || 'default url';
    console.log(method,url);
}

//第二种写法
function ajax2 ({method, url} = {method: 'get', url:'default_url'}) {  //如果没传参数 则从空对象中解构type和url
    // params.type = params.type || 'get';  //不建议 因为当选项值是布尔值false的时候，会把后面的值激活
    // params.url = params.url || 'default url';
    console.log(method,url);
}


ajax();

ajax({type:2,url:23});