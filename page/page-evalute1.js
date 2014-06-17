/**
 * Created by peter on 14-6-17.
 */
var page=require("webpage").create();
var fs=require("fs");
var url="http://qq.com";

page.open(url,function(state){
    if(state=="success"){

        var title=page.evaluate(function(){
            return document.title;
        });

    }

    fs.write("doc.txt",title);

    phantom.exit();
});