window.onload = function(){
	// 登录界面打开关闭
	var log = document.getElementById("log");
	var close = document.getElementById("close");
	close.onclick = function() {
		log.style.display = "none";
	}
	var login = document.getElementById("loginbtn");
	login.onclick = function() {
		log.style.display = "block";
	}
	//无法注册
	var signup =  document.getElementById("signUp");
	signup.onclick = function(){
		alert("暂不开放注册功能");
	}
}