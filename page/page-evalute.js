/**
 * Created by Administrator on 14-6-17.
 */
var page=require("webpage").create();
var fs=require("fs");
var url="http://qq.com";
/**
 * page.content{string}  all html
 * page.plainText{string}  all text (without any HTML tags)
 */

page.open(url,function(state){
    if(state=="success"){
        console.log(JSON.stringify(page.cookies));
//        console.log(page.settings.userAgent);
        var ua =  page.content;
        fs.write("index.html",ua);
        var txt=page.plainText;
        fs.write("index.txt",txt);
    }
    phantom.exit();
});

