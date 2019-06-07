var apqurl = 'http://www.shishouwang.cn';

// 想缓存中存储数据
function set(type, value) {
	localStorage.setItem(type, value);
}

// 取出缓存数据
function get(type) {
	return localStorage.getItem(type);
}

function ret(type) {
	localStorage.removeItem(type)
}

//截取url相应内容
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数

	if(r != null) return unescape(r[2]);
	return null; //返回参数值
}

//复制

function setMotion() {
	var uesr = window.navigator.userAgent.toLowerCase();
	if(uesr.indexOf("iphone") != -1) {
		return true;
	}
}
// 安卓复制
function copyToClip(text) {
	var Context = plus.android.importClass("android.content.Context");
	var main = plus.android.runtimeMainActivity();
	var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
	plus.android.invoke(clip, "setText", text);
	mui.toast('复制成功！');
}

function iosCopyToClip(value) {
	var UIPasteboard = plus.ios.importClass("UIPasteboard");
	var generalPasteboard = UIPasteboard.generalPasteboard();
	// 设置/获取文本内容:
	generalPasteboard.setValueforPasteboardType(value, "public.utf8-plain-text");
	var value = generalPasteboard.valueForPasteboardType("public.utf8-plain-text");
	mui.toast('复制成功！');
}

// 正则-判断手机号码格式
function checkMobile(mobile) {
	var reg = /^1[3456789]\d{9}$/;
	return reg.test(mobile);
}
// 正则-判断银行卡号(数字16-19)
function checkCard(card) {
	var reg = /^\d{16,19}$/g;
	return reg.test(card);
}

function Intercept(str) {
	var texts = str.substring(0, 19);
	return texts;
}

//跳转
function Jump(el) {
	mui.openWindow({
		url: el + ".html",
		id: el
	})
}

//100 整数倍

function test100(num) {
	var r = /^[1-9]\d*00$/;
	return r.test(num);
}

// 页面跳转
function openPage(id,page) {
	document.getElementById(id).addEventListener("tap", function() {
		Jump(page);
	})
}

// 时间戳转时间
function convertDate2(str) {
	var date = new Date(str);
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes();
	return Y + M + D + h + m; //Y+M+D+h+m+s
}
// 时间戳转时间返回月日天
function convertDate3(str) {
	var date = new Date(str);
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = date.getDate() + '';
	h = date.getHours() + ':';
	m = date.getMinutes();
	return Y + M + D; //Y+M+D+h+m+s
}