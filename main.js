events.observeToast();

auto();
toast('start test');
launch('com.sandboxol.blockymods');
sleep(5000);

var text = "test_start";
files.write("/sdcard/text_result.txt", text);

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
        else sleep(3000);
        return;
    } */
    //miui_10
    if(className("android.widget.FrameLayout").test("要允许 Blockman Go 访问以下权限吗？").exists()){
        className("android.widget.Button").test("允许").findOne().click();
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
    else sleep(3000);

if(className("android.widget.LinearLayout").depth(1).exists()){
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
}
else sleep(1000);

/* var qq = "2732014414";
app.startActivity({
    action: "android.intent.action.VIEW", 
    data:"mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin=" + qq,
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.blockymods.view.activity.start.StartActivity"
});
sleep(3000); */

//shell('am kill com.sandboxol.blockymods');
toast('end test');
