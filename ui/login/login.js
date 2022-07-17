loginObj = function () {
    var onkeydown = function (event) {
        if (event.keyCode == 13) {
            that.login_click();
        }
    };
    that = {
        init: function () {
            //enter案件
            window.onkeydown = onkeydown;
            //默认显示中间
            $(window).resize(function () {           //当浏览器大小变化时
                that.scroll();
                // alert($(window).height());           //浏览器时下窗口可视区域高度
                // alert($(document).height());         //浏览器时下窗口文档的高度
                // alert($(document.body).height());    //浏览器时下窗口文档body的高度
                // alert($(document.body).outerHeight(true));  //浏览器时下窗口文档body的总高度 包括border padding margin
            });

            // $("body")[0].style.width = $(window).width();
            // $("body")[0].style.height = $(window).height();
            //that.inittike();
        },
        scroll: function () {

            var h = $(document).height() - $(window).height();
            h = h / 2;
            $(window).scrollTop(h);

            var w = $(document).width() - $(window).width();
            w = w / 2;
            $(window).scrollLeft(w);
        },
        //事件
        login_click: function () {
            let username = $('#exampleInputEmail1')[0].value;
            let password = $('#exampleInputPassword1')[0].value;
            baseObj.login(username, password, {
                success: function () {
                    alert("登陆成功");
                },
                fail: function (e) {
                    alert(e);
                }
            });

        },
        image_mouse_over: function (e) {
            that.isstop = e.parentElement.id.split('_')[1];
        },
        image_mouse_out: function (e) {
            that.isstop = "";
        }
    }
    return that;
}()

$(document).ready(function () {
    loginObj.init();
})


