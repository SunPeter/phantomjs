/**
 * Created by Administrator on 14-6-18.
 */

var page=require("webpage").create();
var fs=require("fs");

var url="http://finery5800.taobao.com/shop/view_shop.htm?spm=a1z0e.1.10010.5.PD6awB";
page.open(url,function(state){
    if(state=="success"){
        var html=page.content;
        fs.write("index.html",page.content);
        console.log("Data initialization finished!");
    }

    phantom.exit();
});
