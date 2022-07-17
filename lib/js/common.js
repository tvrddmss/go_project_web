
function sleep(tik) {
    var now = new Date();
    var exitTime = now.getTime() + tik;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) {
            return;
        }
    }
}
function getFormatDate(nowDate) {
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
    var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
    var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}
