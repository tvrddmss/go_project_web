setting = function () {
    that = {
        rooturl: "http://192.168.50.8:8081/"
    };
    return that;
}();


function addScript(url) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
}

baseObj = function () {
    that = {
        lastdotime: null,//上次操作时间
        userid: null,
        username: null,
        userloginname: null,
        userpassword: null,
        userip: null,
        usertoken: null,
        init: function (callback) {
            addScript('../../lib/js/common.js');
            callback.success();
        },
        login: function (username, password, callback) {

            //方式一 Ajax方式获取Json数据  
            $.ajax({
                url: setting.rooturl + 'go_project/auth',//?username=' + username + '&password=' + password,
                type: 'GET',
                dataType: 'json',
                data: {
                    username: username,
                    password: password
                },
                timeout: 1000,
                cache: false,
                beforeSend: function (e) {

                }, //加载执行方法    
                error: function (event, error) {
                    callback.fail(event.responseText);
                },  //错误执行方法    
                success: function (tt) {
                    var json = eval(tt); //数组  
                    switch (json.code) {
                        case 200:
                            that.lastdotime = new Date();
                            that.userloginname = username;
                            usertoken = json.data.token;
                            callback.success();
                            break;
                        default:
                            callback.fail("用户名或密码错误，请联系weishuolin@163.com");
                            break;
                    }
                } //成功执行方法    
            });


        },

    };
    return that;
}();