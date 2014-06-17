/**
 * Created by peter on 14-6-17.
 */
var page=require("webpage").create();

/**
 * 设置截取区域
 * @type {{top: number, left: number, width: number, height: number}}
 */
//page.clipRect = {
//    top: 14,
//    left: 3,
//    width: 400,
//    height: 300
//};

//page.scrollPosition = {
//    top: 400,
//    left: 0
//};

/**
 * 页面大小
 * @type {{width: number, height: number}}
 */
/**
 * 页面缩放比例
 * @type {number}
 */
page.zoomFactor = 1.25;
page.viewportSize = {
    width: 480,
    height: 800
};
var url="http://qq.com";
page.open(url,function(state){
    if(state=="success"){
        console.log("start!")
        page.render("phantomjs.jpg");
        console.log("finish!");
    }
    phantom.exit();
});