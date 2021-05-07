const lib = require("lib");
const tlist = require("tlist");

function staAt(){
    app.startActivity({
        action: "View", 
        packageName:"com.sandboxol.blockymods",
        className: "com.sandboxol.login.view.activity.login.LoginActivity",
        root: true
    });
    sleep(3000);
}

toast('start test');
launch('com.sandboxol.blockymods');

var text = "test_start";
files.write("/sdcard/text_result.txt", text);
sleep(5000);
//调试窗口
//console.show();
//log(str);

//手机权限----------------------------------------------------------------------
function Authority(){
    var str = "";
    str += device.getAndroidId();
    if(str == "Android10"){
        //miui_12
        if(id("parentPanel").exists()){
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

//注册账号----------------------------------------------------------------------------
app.startActivity({
    action: "View", 
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.login.view.fragment.register.RegisterActivity",
    root: true
});
sleep(1000);

let ssnn;
function suiji(){
    ss = random(13,14);
    //ssn = String.fromCharCode(ss);
    ssnn = ss.toString();
    return ssnn;
}
waitForActivity("com.sandboxol.login.view.fragment.register.RegisterActivity");
    suiji();
    setText(0,"test"+ ssnn);
    setText(1,"a112233");
    setText(2,"a112233");
    className("android.widget.Button").findOne().click();
    sleep(2000);
    //selector.textContains("用户名已存在").findOne().exists()
    var text_1 = id("textinput_helper_text").className("android.widget.TextView").getText();
//if(id("textinput_helper_text").className("android.widget.TextView").text("用户名已存在").findOne().parent().exists()){
if(text_1 == "用户名已存在"){
    while(true){
        suiji();
        setText(0,"test"+ ssnn);
        className("android.widget.Button").findOne().click();
        sleep(2000);
        if(id("btu_sure").findOne().exists()){
            break;
        }
    } 
}
else if(id("textinput_helper_text").className("android.widget.TextView").text("账户不能为空").findOne().parent().exists()){
    while(true){
        suiji();
        setText(0,"test"+ ssnn);
        className("android.widget.Button").findOne().click();
        sleep(2000);
        if(id("btu_sure").findOne().exists()){
            break;
        }
    } 
} 
else if(id("textinput_helper_text").className("android.widget.TextView").text("账号不能小于6位").findOne().parent().exists()){
    sleep(100);
} 
else sleep(1000);

id("btu_sure").findOne().click();


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
sleep(3000);
shell("am force-stop com.sandboxol.blockymods", true);

toast('end test');
