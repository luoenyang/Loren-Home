// 获取url参数
function getUrlParam(name) {
    let url = new URL(window.location.href);

    // 获取查询参数
    let params = new URLSearchParams(url.search);

    // 获取指定参数的值
    let paramValue = params.get(name);

    // 打印参数值
    // console.log('paramValue '+name+'=', paramValue);


    // 获取所有参数对象
    // 创建一个空对象
    let paramsObj = {};

    // 遍历查询参数迭代器，并将每个参数添加到对象中
    for (let [key, value] of params.entries()) {
        paramsObj[key] = value;
    }
    // console.log('paramsObj', paramsObj);

    if (name) {
        return paramValue;
    }
    else {
        return paramsObj;
    }
}

// 校验手机号
function isVaildPhone(phone) {
    if (!(/^1(2|3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
        // alert("手机号码有误");
        return false;
    }
    return true;
}

// 是否是奇数
function isOdd(value) {
    const n = Math.abs(value);
    if (typeof value != "number" || isNaN(n)) {
        throw new Error("expected a number");
    }
    if (!Number.isInteger(n)) {
        throw new Error("expected an integer");
    }
    if (!Number.isSafeInteger(n)) {
        throw new Error("value exceeds maximum safe integer");
    }
    return n % 2 === 1;
}

// 用于富文本解析转化成 
// html => richText = getHtml(text), 之后放入富文本组件（如mpvue - wxParse、wxParse）
// <wxParse: content="richText" @preview="preview" @navigate="navigate" />
function getHtml(text) {
    const escape2Html = function (str) {
        var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
    }
    const htmlJzDecode = function (str) {
        if (!str || str.leng == 0) return str;
        return str.replace(/\@\@\@/g, '</').replace(/\_\@\_\*/g, '/*').replace(/\*\_\@\_/g, '*/').replace(/\_\@\!\@\_/g, '/');
    }

    // 先替换html标签
    text = escape2Html(text);
    // 再替换相关@标签
    text = htmlJzDecode(text);

    return text;
}

// 自动补两位小数点
function changeTwoDecimal(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        return 0.00;
    }
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}

function isStringNumber(value) {
    // 判断是否为字符串类型且可以通过Number()转换为数字，且纯数值字符串
    return typeof value === 'string' && !isNaN(Number(value)) && /^-?\d+(\.\d+)?$/.test(value);
}
function isNumber(value) {
    // 判断是否为数字类型
    return typeof value === 'number' && !isNaN(value);
}

// 整数部分每三位加逗号 “，”  正负都可以处理
function formatNumSplit(value) {
    //传入值是空直接返回0
    if (!value) return "0.00";
    if (!this.isStringNumber(value) && !this.isNumber(value)) { return 'NaN' };
    value = Number(value);
    value = value.toFixed(2);
    const values = value.toString().split(".");
    // 整数部分
    let integerNum = values[0], ZF = integerNum.split('')[0];
    ZF = ZF == '-' ? ZF : '';
    integerNum = Math.abs(integerNum);
    integerNum = integerNum.toString();
    // 小数部分
    let decimalNum = values[1] ? values[1] : "00";
    // decimalNum = decimalNum.length === 1 ? decimalNum + 0 : decimalNum

    //传入值小于1000不切割
    if (integerNum < 1000) {
        return ZF + `${integerNum}.${decimalNum}`;
    }
    const list = [];
    while (integerNum.length > 3) {
        // 倒序切割
        list.unshift(integerNum.slice(-3));
        integerNum = integerNum.slice(0, -3);
    }
    // 处理剩余长度
    list.unshift(integerNum);
    return ZF + `${list.join(",")}.${decimalNum}`;
}

// 将utc时间转当前时间
function utcTimeToLocal(date, format) {
    if (!date) { return null; }
    var time = moment.utc(date).local().format(format || 'YYYY-MM-DD HH:mm:ss A');
    return time;
}




// export default XXX;

// module.exports = {
//     getUrlParam,
//     isVaildPhone,
//     isOdd,
// }