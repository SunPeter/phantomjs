/**
 * Created by peter on 14-6-17.
 */

/**
 * 结果为true。也就是说，就像浏览器环境一样，我们的代码运行在window环境下，可以很方便地进行DOM方面的操作。
 */
console.log(window===this);

console.log(phantom.args.length);



phantom.exit();