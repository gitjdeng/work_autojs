const lib = require("lib.js");
const tlist = require("tlist.js");
//importClass(org.jsoup.Jsoup);

toast('start test');


var text = "test_start";
files.write("/sdcard/text_result.txt", text);

//调试窗口
/* console.show();
var str = "";
str += device.getAndroidId();
log(str); */

for(i = 1;i <=1000;i++){
    launch('test.sandboxol.blockymods');
    sleep(10000);
/*app.startActivity({
    action: "View", 
    packageName:"test.sandboxol.blockymods",
    className: "com.sandboxol.center.view.activity.host.HostActivity",
    root: true
});
sleep(3000); */

//注册账号----------------------------------------------------------------------------
    id("tv_register").findOne().click();
    sleep(2000);
    //setText(0,"abttt" + Math.floor(Math.random()*1000));
    setText(0,"abt3t" + i);
    setText(1,"a112233");
    setText(2,"a112233");
    className("android.widget.Button").findOne().click();
    sleep(3000);

    //setText(0,"abttt" + Math.floor(Math.random()*1000));
    setText(0,"abt3t" + i);
    id("btn_sure").findOne().click();
    sleep(3000);
    id("btn_confirm").findOne().click();
    sleep(10000);

//shell("am force-stop test.sandboxol.blockymods", true);
shell("pm clear test.sandboxol.blockymods", true);
sleep(3000);
}
toast('end test');
