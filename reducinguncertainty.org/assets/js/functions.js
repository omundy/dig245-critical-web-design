/**
 *	These functions are in the public domain
 *	Owen Mundy owenmundy.com
 */


// if TID has a g then remove
function cleanTID(tid) {
	return tid.replace(/^g/, '');
}




/**
 *	Make sure a property or method is:
 *	1. declared
 *	2. is !== null, undefined, NaN, empty string (""), 0, false
 *	* like PHP isset()
 */
function prop(val) {
	if (typeof val !== 'undefined' && val) {
		return true;
	} else {
		return false;
	}
}
/**
 *	Get random property from object
 */
function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
}


/**
 *	Wrapper function(s) for console.log() for non-chrome browsers
 */
var debug = true;

function log(text) {
	if (prop(debug) && window.console)
		window.console.log(text);
}
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};





/**
 *	Pad floating point values to be four numbers long
 */
function padFloat(num) {
	var str = "" + num;
	// confirm num is float
	if (str.indexOf(".") !== 1) return str;
	// pad float depending on length
	if (str.length <= 3) {
		str = str + "000";
	} else if (str.length <= 4) {
		str = str + "00";
	} else if (str.length <= 5) {
		str = str + "0";
	}
	return str;
}


/**
 *	Round decimal according to size
 */
function roundDecimal(num) {

	var decimal = 1000;

	if (num > 1000) {
		decimal = 1;
	} else if (num > 100) {
		decimal = 10;
	} else if (num > 10) {
		decimal = 10;
	} else if (num > 1) {
		decimal = 1000;
	} else if (num > 0.1) {
		decimal = 1000;
	} else if (num > 0.01) {
		decimal = 1000;
	}
	num = Math.round(num * decimal) / decimal;
	return num;
}
