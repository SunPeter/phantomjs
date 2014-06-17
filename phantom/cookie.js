/**
 * Created by peter on 14-6-17.
 */

console.log(phantom.cookies);

/**
 *  增加cookies
 */
phantom.addCookie({
    'name': 'Added-Cookie-Name',
    'value': 'Added-Cookie-Value',
    'domain': '.google.com'
});
console.log(JSON.stringify(phantom.cookies));

/**
 * 删除某个cookie
 */
phantom.deleteCookie('Added-Cookie-Name');
console.log(JSON.stringify(phantom.cookies));

/**
 * 清除所有cookies
 */
phantom.clearCookies();
console.log(JSON.stringify(phantom.cookies));

phantom.exit();