/**
 * Created by peter on 14-6-17.
 */
var url="args.js";
var result=phantom.injectJs(url);
console.log(result);

phantom.exit();