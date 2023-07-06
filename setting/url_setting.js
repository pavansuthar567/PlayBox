/*
 *	APIs URL Handalder
 * 	--- START ----
 */

userApiUrlHandler = module.exports = require("./api/user/user.js");
userApiUrlHandler.BindUrl();

/*
 *  --- END ----
 */

urlHanlder = module.exports = require("../setting/url.js");
urlHanlder.BindUrl();
