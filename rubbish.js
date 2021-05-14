/* app.startActivity({
    action: "View", 
    packageName:"com.sandboxol.blockymods",
    className: "com.sandboxol.common.base.app.MTTemplateActivity",
    root: true
});
sleep(1000); */

/* let ssnn;
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

id("btu_sure").findOne().click(); */