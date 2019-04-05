"use strict";
// 可选参数 ： 用 ? 标志
function search2(age, stature) {
    let y = '找到了' + age + '岁';
    if (stature !== undefined) {
        y = y + stature;
    }
    return y + '小姐姐';
}
let result2 = search2(18, '大长腿');
console.log(result2);
