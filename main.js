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
example_1();

function staAt(){
    app.startActivity({
        action: "View", 
        packageName:"com.sandboxol.blockymods",
        className: "com.sandboxol.login.view.activity.login.LoginActivity",
        root: true
    });
    sleep(3000);
}
//注册账号
/* staAt();
id("tv_register").findOne().click();
waitForActivity("com.sandboxol.login.view.fragment.register.RegisterActivity"); */
app.startActivity({
    action: "View", 
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.login.view.fragment.register.RegisterActivity",
    root: true
});
sleep(1000);

var ssnn;
function suiji(){
    ss = random(10,11);
    //ssn = String.fromCharCode(ss);
    ssnn = ss.toString();
    return ssnn;
}

/* do{
    suiji();
    setText(0,"test"+ ssnn);
    setText(1,"a112233");
    setText(2,"a112233");
    className("android.widget.Button").findOne().click();
}
while(className("android.weiget.TextView").text("账户不能为空").findOne().parent().exists()); */

    suiji();
    setText(0,"test"+ ssnn);
    setText(1,"a112233");
    setText(2,"a112233");
    className("android.widget.Button").findOne().click();
if(className("android.weiget.TextView").text("用户名已存在").findOne().parent().exists()){
    suiji();
    setText(0,"test"+ ssnn);
    className("android.widget.Button").findOne().click();
}
/* else if(className("android.weiget.TextView").text("账号不能小于6位").findOne().parent().exists()){

} */
else sleep(1000);



//登录页
staAt();
if(className("android.view.ViewGroup").depth(6).exists()){
    setText(0,"1170088800");
    setText(1,"jdeng123456");
    id("btn_sign").findOne().click();
    sleep(3000);
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
