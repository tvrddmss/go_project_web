loginObj = function () {
    var onkeydown = function (event) {
        if (event.keyCode == 13) {
            that.search_click();
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
        search_click: function () {
            alert("12");
        },
    }
    return that;
}()

$(document).ready(function () {
    loginObj.init();
    const root = ReactDOM.findDOMNode(document.getElementById('root'));
    //root.render('<h1>Hello, world!</h1>');
    const element = '<h1>Hello, world!</h1>';
    ReactDOM.render(element, root, null);
})


