var page=require("webpage").create();
var fs=require("fs");
var url="http://www.baidu.com";
var date=Date.now();
page.open(url,function(state){
    /**
     * page.settings
     */
    console.log(JSON.stringify(page.settings));

    /**
     * page.title
     */
    console.log(page.title);
    if(state=="success"){
        var t=Date.now()-date;
        console.log(t+"msec");
        phantom.exit();
    }
});
