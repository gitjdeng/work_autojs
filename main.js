auto();
//var toastmonitor = require ('./toastmonitor');
//const lib = require("./lib");
var toasttext = "";
threads.start(function(){
    events.observeToast();
    events.onToast(function(toast){
    toasttext = toast.getText();
    log(toast.getText());
});
})

<<<<<<< HEAD

//强行打开登录页---------------------------------------------------------------
function staLg(){
<<<<<<< HEAD
=======
//强行打开登录页---------------------------------------------------------------
function staAt(){
>>>>>>> afa0e9d (调整顺序)
=======
>>>>>>> 6e099b8 (注册登录流程)
    app.startActivity({
        action: "View", 
        packageName:"com.sandboxol.blockymods",
        className: "com.sandboxol.login.view.activity.login.LoginActivity",
        data:"",
        root: true
    });
    console.log("staLg");
    sleep(3000);
}
<<<<<<< HEAD
<<<<<<< HEAD
//重启app--------------------------------------------------------------------
=======
//重启app
>>>>>>> 6e099b8 (注册登录流程)
function staAt(){
    app.startActivity({
        action: "View", 
        packageName:"com.sandboxol.blockymods",
        className: "com.sandboxol.blockymods.view.activity.start.StartActivity",
        data:"",
        root: true
    });
    console.log("staAt");
    sleep(3000);
    
}
<<<<<<< HEAD
=======
>>>>>>> afa0e9d (调整顺序)
=======
>>>>>>> 6e099b8 (注册登录流程)
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

//用例执行入口
toast('start test');
<<<<<<< HEAD
<<<<<<< HEAD
shell("pm clear com.sandboxol.blockymods", true);
=======
>>>>>>> afa0e9d (调整顺序)
=======
shell("pm clear com.sandboxol.blockymods", true);
>>>>>>> 6e099b8 (注册登录流程)
launch('com.sandboxol.blockymods');

var text = "test_start";
files.write("/sdcard/text_result.txt", text);
sleep(5000);

//调试窗口开启
<<<<<<< HEAD
//console.show();
<<<<<<< HEAD
=======
=======
console.show();
>>>>>>> 6e099b8 (注册登录流程)

//Authority();
>>>>>>> afa0e9d (调整顺序)

//注册账号----------------------------------------------------------------------------
<<<<<<< HEAD
=======
/*app.startActivity({
    action: "View", 
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.login.view.activity.login.LoginActivity",
    data:"",
    root: true
});*/
staAt();
sleep(3000);

>>>>>>> 6e099b8 (注册登录流程)
if(id("tv_register").exists()){
    id("tv_register").findOne().click();
    sleep(1000);
} 
else{
        app.startActivity({
            action: "View", 
            packageName:"com.sandboxol.blockymods",
            className: "com.sandboxol.center.view.activity.MTTemplateActivity",
            data:"",
            root: true
        });
}  

let ssnn;
function suiji(){
    ss = random(105,105);
    ssnn = ss.toString();
    return ssnn;
}
<<<<<<< HEAD
var activitytext = currentActivity();

=======
>>>>>>> 6e099b8 (注册登录流程)

waitForActivity("com.sandboxol.center.view.activity.MTTemplateActivity");
    suiji();
    setText(0,"test"+ ssnn);
    setText(1,"a112233");
    setText(2,"a112233");
    className("android.widget.Button").findOne().click();
    sleep(2000);

<<<<<<< HEAD
<<<<<<< HEAD
if(id("btn_sure").exists()){
    id("btn_sure").findOne().click();
=======
    //var text_1 = className("android.widget.TextView").depth(14).text("用户名已存在");
    //console.log(text_1);

if(className("android.widget.TextView").depth(14).text("用户名已存在")){
    while(true){
        ssnn = ssnn++;
        setText(0,"test"+ ssnn);
        className("android.widget.Button").findOne().click();
        sleep(2000);

        if(id("btu_sure").findOne().exists()){
            id("btu_sure").findOne().click();
            console.log();
            break;
        }
        break;
    } 
=======
var text_1 = className("android.widget.TextView").depth(14).text("用户名已存在");
    
if(text_1 != null){
        while(true){
            ssnn = ++ssnn;
            id("editAccount").setText("test"+ ssnn);
            className("android.widget.Button").text("下一步").findOne().click();
            sleep(2000);
            console.log("not");
            if(id("btn_sure").exists()){
                break;
            }
    }
>>>>>>> 6e099b8 (注册登录流程)
}
/*else if(className("android.widget.TextView").depth(14).text("账户不能为空")){
    while(text_1 != null){
        ssnn = ++ssnn;
        setText(0,"test"+ ssnn);
        className("android.widget.Button").text("下一步").findOne().click();
        sleep(2000);
    } 
} 
else if(className("android.widget.TextView").depth(14).text("账号不能小于6位")){
    while(text_1 != null){
        ssnn = ++ssnn;
        setText(0,"test"+ ssnn);
        className("android.widget.Button").text("下一步").findOne().click();
        sleep(2000);
    } 
} */
else {sleep(1000)}

<<<<<<< HEAD
    id("btu_sure").findOne().click();
>>>>>>> afa0e9d (调整顺序)
    sleep(5000);
    console.log(toasttext);
    //出现用户名错误
    if(toasttext = "账户名称已存在，请重新输入"){
    while(true){
        ssnn = ++ssnn;
        id("editAccount").setText("test"+ ssnn);
        className("android.widget.Button").text("下一步").findOne().click();
        sleep(2000);
        activitytext = currentActivity();
        if(id("textinput_helper_text").depth(14).findOne().text() != "该名称可用"){
            console.log("11");//lingshi
            while(true){
                id("iv_random_name").findOne().click();
                sleep(1000);
                id("btn_sure").findOne().click();
                sleep(5000);
                activitytext = currentActivity();
                if(activitytext == "com.sandboxol.blockymods.view.activity.host.HostActivity"){
                    console.log("name-1");
                    break;
                }
                else continue;
            }
        }
        else if(id("textinput_helper_text").depth(14).findOne().text() = "该名称可用"){
            console.log("22");//lingshi
            while(true){
                id("btn_sure").findOne().click();
                sleep(5000);
                activitytext = currentActivity();
                if(activitytext == "com.sandboxol.blockymods.view.activity.host.HostActivity"){
                    console.log("name-2");
                    break;
                }
                else continue
            }
        }
        else if(activitytext == "com.sandboxol.blockymods.view.activity.host.HostActivity"){
            console.log("name-3");
            break;
        }
        else continue;
    }
}
}

//判断用户名规范
else if(id("textinput_helper_text").depth(14).findOne().text() != null){
        while(true){
            ssnn = ++ssnn;
            id("editAccount").setText("test"+ ssnn);
            className("android.widget.Button").text("下一步").findOne().click();
            sleep(2000);
            console.log("1");
            activitytext = currentActivity();
            //如果进入角色创建页
            if(id("btn_sure").exists()){
                while(true){
                    setText(0,"test01");//lingshi

                    id("btn_sure").findOne().click();
                    sleep(5000);
                    activitytext = currentActivity();
                    console.log(toasttext);
                    if(activitytext == "com.sandboxol.blockymods.view.activity.host.HostActivity"){
                        console.log("test-name");
                        break;
                    }
                    else if(id("textinput_helper_text").findOne().text() != "该名称可用"){
                        while(true){
                            id("iv_random_name").findOne().click();
                            sleep(2000);
                            console.log("mingceng")
                            activitytext = currentActivity();
                            if(id("textinput_helper_text").findOne().text() = "该名称可用"){
                            id("btn_sure").findOne().click();
                            sleep(5000);
                            console.log("zhuce");
                            }
                            else if(activitytext == "com.sandboxol.blockymods.view.activity.host.HostActivity"){
                                console.log("3");
                                break;
                            }
                        }
                    }
                    else break;
                }
            }
            else if(activitytext == "com.sandboxol.blockymods.view.activity.host.HostActivity"){
                console.log("4");
                break;
            }
    }
}

waitForActivity("com.sandboxol.blockymods.view.activity.host.HostActivity");
=======

    console.log("2");
    id("btn_sure").findOne().click();
>>>>>>> 6e099b8 (注册登录流程)
    sleep(10000);
    text = "注册完成  pass"
    files.write("/sdcard/text_result.txt", text);


//登录页
app.startActivity({
    action: "View", 
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.login.view.activity.login.LoginActivity",
    root: true
});
console.log("login");
waitForActivity("com.sandboxol.login.view.activity.login.LoginActivity");

    setText(0,"1170088800");
    setText(1,"a112233");
    id("btn_sign").findOne().click();
    sleep(3000);


console.log("end");
shell("am force-stop com.sandboxol.blockymods", true);
<<<<<<< HEAD
console.clear();
=======
>>>>>>> 6e099b8 (注册登录流程)
toast('end test');
