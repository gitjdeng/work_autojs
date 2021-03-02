"auto";

toast('start test');
launch('com.sandboxol.blockymods');

var text = "test_start";
files.write("/sdcard/text_result.txt", text);
sleep(5000);

//手机权限
function example_1(){
    //miui_12
        /* if(id("parentPanel").exists()){
            id("permission_allow_foreground_only_button").click();
            sleep(10000);
            if(className("android.widget.LinearLayout").depth(1).exists()){
                var text = "\n测试权限申请 pass";
                files.append("/sdcard/text_result.txt", text);
            }
            else
            {
                var text = "\n测试权限申请 false";
                files.append("/sdcard/text_result.txt", text);
            }
        }
        else sleep(3000); */

    //miui_10
    if(id("permission_applicant").exists()){
        click(360,1162,702,1262);
        waitForActivity("com.sandboxol.blockymods.view.activity.main.MainActivity");
        if(className("android.view.ViewGroup").depth(11).drawingOrder(2).indexInParent(0).exists()){
            var text = "\nexample_1 测试权限申请 pass";
            files.append("/sdcard/text_result.txt", text);
        }
        else
        {
            var text = "\nexample_1 测试权限申请 false";
            files.append("/sdcard/text_result.txt", text);
        }
    }
    else sleep(3000);
}
example_1();

app.startActivity({
    action: "View", 
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.login.view.activity.login.LoginActivity",
    root: true
});
sleep(3000);

//登录页
if(className("android.view.ViewGroup").depth(6).exists()){
    id("editName").findOne().setText("1170088800");
    click(60,472,660,572);
    className("android.widget.FrameLayout").depth(8).drawingOrder(1).indexInParent(0).findOne().setText("jdeng123456");
    id("btn_sign").findOne().click();
    sleep(2000);
}
else sleep(1000);

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
    className: "com.sandboxol.blockymods.view.activity.start.StartActivity",
    root: true
});
sleep(3000);

shell("am force-stop com.sandboxol.blockymods", true);

toast('end test');
