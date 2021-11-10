const lib = require("lib.js");
const tlist = require("tlist.js");
//importClass(org.jsoup.Jsoup);

toast('start test');
launch('com.sandboxol.blockymods');

var text = "test_start";
files.write("/sdcard/text_result.txt", text);
sleep(5000);
//调试窗口
/* console.show();
var str = "";
str += device.getAndroidId();
log(str); */

//手机权限----------------------------------------------------------------------
function Authority(){
    var str = "";
    str += device.getAndroidId();
    if(str == "d5e0791a02a27abd"){
        //miui_12 mi_note2
        if(className("android.widget.TextView").text("要允许 Blockman GO 访问以下权限吗？").exists()){
            click(560,1710,1000,1850);
            sleep(10000);
            if(className("android.widget.LinearLayout").depth(1).exists()){
                var text = "\ntest_case1 读写测试权限申请 pass";
                files.append("/sdcard/text_result.txt", text);
            }
            else
            {
                var text = "\ntest_case1 读写测试权限申请 false";
                files.append("/sdcard/text_result.txt", text);
            }
        }
        else sleep(3000);
    }
    else if(str == "69c2cdc51b5dc2d6"){
        //红米5A权限确认
        if(id("permission_applicant").exists()){
            //if(className("android.weiget.TextView").text("要允许 Blockman Go 访问以下权限吗？").exists()){
            click(360,1162,702,1262);
            waitForActivity("com.sandboxol.blockymods.view.activity.main.MainActivity");
            if(className("android.view.ViewGroup").depth(11).drawingOrder(2).indexInParent(0).exists()){
                var text = "\ntest_case1 读写测试权限申请 pass";
                files.append("/sdcard/text_result.txt", text);
            }
            else
            {
                var text = "\ntest_case1 读写测试权限申请 false";
                files.append("/sdcard/text_result.txt", text);
            }
        }
        else sleep(3000);
    }
}

Authority();
sleep(3000);

//注册账号----------------------------------------------------------------------------
/* if (id("btn_sign").exists()){
    setText(0,"1170088800");
    setText(1,"a112233");
    id("btn_sign").findOne().click();
    sleep(3000);
}
else {
    app.startActivity({
        action: "View", 
        packageName:"com.sandboxol.blockymods",
        className: "com.sandboxol.login.view.activity.login.LoginActivity",
        root: true
    });
    sleep(1000);
} */

//登录页
//tlist.staAt();
if(className("android.view.ViewGroup").depth(6).exists()){
    setText(0,"1170088800");
    setText(1,"a112233");
    id("btn_sign").findOne().click();
    sleep(3000);
}
else {
    let login = "http://mods.sandboxol.com/user/api/v2/app/login";
    let e_login = http.post(login, {
        "bmg-device-id": "6577bb9966ec3de9",
        "OS":"android",
        "packageName": "blockymods",
        "userId":"1125900000",
        "appLanguage": "zh",
        "appVersion": "4092",
        "bmg-sign": "f2f90445f9523150cac3fb573a27c32735123bc5",
        "Access-Token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3OTAzNDAwMDAiLCJpYXQiOjE2MjA5ODcyMzAsInN1YiI6IjIwMjEtMDUtMTQgMTA6MTM6NTAiLCJpc3MiOiJTYW5kYm94LVNlY3VyaXR5LUJhc2ljIiwiZXhwIjoxNjI2MTcxMjMwfQ.ZHrMXGJf0KGaECWtZ9L6DnqqHR48mCzx-AEyjzoL4tg",
        "androidVersion": "30"
    });
    toastLog(e_login.body.string());
}

//游客注册页
/* if(className("android.widget.LinearLayout").depth(1).exists()){
    id("btn_sure").findOne().click();
    wait_fort('注册成功');
    if(tosat == '注册成功'){
        var text = "\n游客账号创建 pass";
        files.append("/sdcard/text_result.txt", text);
    }
    else
    {
        var text = "\n游客账号创建 false";
        files.append("/sdcard/text_result.txt", text);
    }
}*/
app.startActivity({
    action: "View", 
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.blockymods.view.activity.host.HosttActivity",
    root: true
});
sleep(3000);

shell("am force-stop com.sandboxol.blockymods", true);

toast('end test');
