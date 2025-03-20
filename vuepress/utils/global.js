let momentSIT = setInterval(() => {
    if (!moment) { return }
    // 设置时间格式
    moment.locale();         // zh-cn
    moment.updateLocale('zh-cn', {
        meridiem: function (hour, minute, isLowercase) {
            if (hour < 9) {
                return "早上";
            } else if (hour < 11) {
                return "上午";
            } else if (hour < 13) {
                return "中午";
            } else if (hour < 18) {
                return "下午";
            } else {
                return "晚上";
            }
        }
    });
    clearInterval(momentSIT);
}, 10)