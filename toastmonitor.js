
function toastmonitor(){
events.observeToast();
events.onToast(function(toast){
    var pkg = toast.getPackageName();
    log("Toast内容: " + toast.getText() +
        " 来自: " + getAppName(pkg) +
        " 包名: " + pkg);
});}

module.exports ={toastmonitor:toastmonitor,};