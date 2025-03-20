// import axios from 'axios';
// import { ElMessageBox } from 'element-plus'
// import Qs from 'qs';
// import $ from 'jquery'

// document.write('<script src="/libs/axios.min.js"></script>');
// document.write('<script src="/libs/qs.min.js"></script>');

const httpUtil = {
    /**
     * post请求
     * 把axios的请求方式改成符合我们的使用习惯
     * @param {String} url 请求路径
     * @param {Object} params 请求参数
     * @param {Function} callback 请求成功回调
     * @param {Boolean} isJson 是否是application/json方式请求
     */

    post: function (url, params, callback, isJson) {
        let headers = {};
        let cfg = {
            url: url,
            method: 'post',
        }
        if (isJson) {
            headers['Content-Type'] = 'application/json';
            cfg.data = params;
        } else {
            // url字符串形式提交（参数值都应转化为字符串/json字符串 如{a:1,b:2} ==> a=1&b=2）
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
            // 如果参数值是数组，需先将数组转化成json字符串，否则axios最终提交的参数格式会错误，当然也可以在传入之前就转
            // 如果参数值是数组，qs无法正常转化它会将数组进行拆分 而不是一个整体了
            // 如果是对象如{a:1}则不需要，使用qs转即可

            // 传入的是个对象{}
            if (typeof params == 'object') {
                for (let i in params) {
                    let v = params[i];
                    // 判断参数值是否是数组
                    // params[i] = v && Array.isArray(v) ? JSON.stringify(v) : v;

                    // 数组[]或是对象{}
                    // 将参数序列化为JSON格式
                    params[i] = v && typeof v == 'object' ? JSON.stringify(v) : v;
                }
            }
            cfg.data = Qs.stringify(params);
        }
        cfg.headers = headers;

        axios.request(cfg).then(function (rs) {
            let rsData = rs.data;
            if (callback && typeof callback == 'function') {
                callback(rsData);
            }
        }).catch(function (error) {

            console.log(error);
            // 错误提示
            if (error.response) {
                if (error.response.status == '401') {
                    location.href = "/#/login";
                    return;
                } else {
                    alert("服务器或网络错误！");
                }
            } else if (error.request) {
                alert("请求错误！");
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

            // 回调
            if (callback && typeof callback == 'function') {
                callback(error);
            }
        });
    },

    get: function (url, params, callback) {
        axios.request({
            url: url,
            method: 'get',
            params: params
        }).then(function (rs) {
            let rsData = rs.data;
            if (callback && typeof callback == 'function') {
                callback(rsData);
            }
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert("服务器或网络错误！");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                alert("请求错误！");
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

        });
    },

    getFile: function (url, params, callback) {
        console.log('开始下载文件：' + url);
        axios.request({
            url: url,
            method: 'get',
            responseType: 'blob',
            params: params
        }).then(function (rs) {
            let rsData = rs.data;
            if (callback && typeof callback == 'function') {
                callback(rsData);
            }
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert("服务器或网络错误！");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                alert("请求错误！");
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        });
    },
    asyncPost: async function (url, params, isJson) {
        let headers = {};
        let cfg = {
            url: url,
            method: 'post',
        }
        if (isJson) {
            headers['Content-Type'] = 'application/json';
            cfg.data = params;
        } else {
            // url字符串形式提交（参数值都应转化为字符串/json字符串 如{a:1,b:2} ==> a=1&b=2）
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
            // 如果参数值是数组，需先将数组转化成json字符串，否则axios最终提交的参数格式会错误，当然也可以在传入之前就转
            // 如果参数值是数组，qs无法正常转化它会将数组进行拆分 而不是一个整体了
            // 如果是对象如{a:1}则不需要，使用qs转即可

            // 传入的是个对象{}
            if (typeof params == 'object') {
                for (let i in params) {
                    let v = params[i];
                    // 判断参数值是否是数组
                    // params[i] = v && Array.isArray(v) ? JSON.stringify(v) : v;

                    // 数组[]或是对象{}
                    // 将参数序列化为JSON格式
                    params[i] = v && typeof v == 'object' ? JSON.stringify(v) : v;
                }
            }
            cfg.data = Qs.stringify(params);
        }
        cfg.headers = headers;

        let res = await axios.request(cfg);
        if (res.data.success === true) {
            console.log(res.data)
            return res.data;
        }
        return Promise.reject(new Error(res.data));
    },
    postFile: function (url, formData, success, failure) {
        // $.ajax({
        //     url: url,
        //     data: formData,
        //     method: "POST",
        //     cache: false,
        //     contentType: false,
        //     processData: false,
        //     success: function (res) {
        //         console.log("上传完成!", res);
        //         success(res);
        //     },
        // });
        // axios.post({
        //     url: url,
        //     formData,
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }).then(function (rs) {
        //     let rsData = rs.data;
        //     success(rsData);
        // }).catch(function (error) {

        //     console.log(error);
        //     // failure(error);
        // });
        // let service = axios.create({
        //     url: url
        // });
        // service.interceptors.request.use(
        //     (config) => {
        //         config.headers['Content-Type'] = 'multipart/form-data';
        //         return config;
        //     },
        //     (error) => {
        //         return Promise.reject(error);
        //     }
        // );
        // service({
        //     url: url,
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     data: formData
        // }).then(function (rs) {
        //     let rsData = rs.data;
        //     success(rsData);
        // }).catch(function (error) {

        //     console.log(error);
        //     // failure(error);
        // });

        axios.post(url, formData, { timeout: 180000 }).then(res => {
            success(res);
        }).catch(e => {
            console.error(e);
            failure(e.message);
        });
    }
}

// export default httpUtil;