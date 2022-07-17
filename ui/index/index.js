indexObj = function () {
    var onkeydown = function (event) {
        if (event.keyCode == 13) {
            that.search_click();
        }
    };
    that = {
        isstop: 0,
        indexs: [4, 3, 5, 6, 2, 7, 8, 1],
        init: function () {
            baseObj.init({
                success: function () {
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
                    that.inittike();
                }
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
        inittike: function () {
            for (let columnindex = 1; columnindex <= 8; columnindex++) {
                let html = "";
                for (let i = 0; i < 3; i++) {
                    html += '<img src="../../images/' + columnindex + '_' + (i + 1) + '.jpg" data-caption="" onmouseover="indexObj.image_mouse_over(this);" onmouseout="indexObj.image_mouse_out(this);" class="image">';
                }
                //加载图片
                $('#imagecontent_' + columnindex)[0].innerHTML = html;
            }
            that.starttike(0);
        },
        starttike: function (index) {
            index += 1;
            if (index >= 8) {
                return;
            }
            else {
                setTimeout(() => {
                    // try {
                    that.starttike(index);
                    let div = $('#imagecontent_' + that.indexs[index])[0];
                    let timer = setInterval(function () {
                        if (that.isstop == div.id.split('_')[1]) {
                            return
                        }
                        that.tike(div);
                    }, 6000);
                    // }
                    // catch (ex) {
                    //     alert(index + ":" + ex);
                    // }
                }, 200);
            }

        },
        tike: function (div) {
            let img0 = div.childNodes[0];

            let img0_op = img0.style.opacity;
            if (img0_op == '') {
                img0_op = 1;
            }
            let timer = setInterval(function () {
                // if (that.isstop == div.id.split('_')[1]) {
                //     return
                // }
                img0_op -= 0.02;
                img0.style.opacity = img0_op;
                if (img0_op <= 0) {
                    clearInterval(timer);
                    img0.remove();
                    img0.style.opacity = '';
                    let img1 = div.childNodes[0];
                    let margintop = 302;
                    img1.style.marginTop = margintop + 'px';
                    timer = setInterval(function () {
                        // if (that.isstop == div.id.split('_')[1]) {
                        //     return
                        // }
                        margintop -= 10;
                        img1.style.marginTop = margintop + 'px';
                        if (margintop <= 10) {
                            img1.style.marginTop = 0;

                            div.appendChild(img0);
                            clearInterval(timer);

                            // setTimeout(function () {
                            //     that.tike(div)
                            // }, 6000);
                        }
                    }, 1);
                }
            }, 20);
        },
        //事件
        search_click: function () {
            alert("12");
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
    indexObj.init();
})


