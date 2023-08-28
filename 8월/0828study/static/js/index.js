//import { sum as mySum} from './mymodule.js'; // as를 통해 다른 이름으로 변경가능
import {default as sum , makeTable} from './mymodule.js'

console.log(sum(10,20));
//console.log(mySum(10,20)); -> default 제외, 단일 export시 문제

window.onload=function(){
    makeTable("box",4,5);
    makeTable("box2",3,7);
}