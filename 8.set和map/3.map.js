/**
 * Created by 51621 on 2016/12/20.
 */
//map可以把对象和数组作为它的key 是对object缺陷的弥补
//和set一样有add delete has...方法
'use strict';
let objMap = {'objMap': 'objMap'};
let arrMap = ['a','r','r'];

let map = new Map([[objMap, 'o'],[arrMap, 'a'],[1,2]]);
//实战中常把dom元素作为key

console.log(map, [...map]);

//和Object对比
var data = {};
var element = document.getElmentByTagName("body");
data[element] = 123;
//data['[object HTMLCollection]'];

let map2 = new Map([element,123321]);