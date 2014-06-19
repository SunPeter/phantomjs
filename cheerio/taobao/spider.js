/**
 * Created by Administrator on 14-6-18.
 */
var cheerio=require("cheerio");
var fs=require("fs");

fs.readFile("index.html",function(err,data){
    if(err){
        console.log(err);
        return;
    }
    else{
        var $=cheerio.load(data);
        var item=$(".item");
        var json={};
        json.data=new Array();
        item.each(function(i){
            var data={};
            var t=$(this);
            data.url=t.find("a").attr("href");
            data.src=t.find("img").attr("data-ks-lazyload");
            data.intro=t.find(".item-name").text();
            data.price= t.find(".c-price").text();
            data.num= t.find(".sale-num").text();
            json.data.push(data);
        });
        fs.writeFileSync("data.json",JSON.stringify(json));
    }
});