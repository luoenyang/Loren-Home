
// 公共资源引入
// prePath: 文件与根目录的相对路径前缀 如../ , ../../
function setCommonResource(prePath) {
    if (prePath && prePath[prePath.length - 1] == '/') {
        prePath = prePath.slice(0, -1);
    }
    var list = [
        // 引入jq
        {
            src: prePath + "/libs/jquery-3.1.1.min.js",
            type: 'js',
        },
        // 引入vue
        {
            src: prePath + "/libs/vue-3.2.4.global.js",
            type: 'js',
        },
        // 引入请求工具
        {
            src: prePath + "/utils/httpUtil.js",
            type: 'js',
        },
        // 引入web模板引擎
        {
            src: prePath + "/libs/handlebars-4.7.7.js",
            type: 'js',
        }
    ];

    list.forEach(item => {
        if (item.type == 'css') {
            const link = document.createElement('link');
            link.href = item.src || item.href;
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
        else if (item.type == 'js') {
            const script = document.createElement('script');
            script.src = item.src;
            script.type = 'text/javascript';
            document.head.appendChild(script);
        }
    })

}
