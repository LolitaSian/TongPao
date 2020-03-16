window.onload = function() {
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

	// 导航栏点不开
	var nav = document.getElementById("mid");
	var navitems = nav.getElementsByTagName("div");
	for (var i = 1; i < navitems.length; i++) {
		navitems[i].onclick = function() {
			alert("太忙了，我还没写完的了");
		}
	}

}
