window.onload = function() {
	var log = document.getElementById("log");
	var close = document.getElementById("close");
	
	//打开关闭登录框
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
	
	//设置picbox宽，使图片横向排列
	var imglist = document.getElementById("picbox");
	var imgArr = imglist.getElementsByTagName("img");
	imglist.style.width = 850 * imgArr.length + "px";

	//设置轮转图片底下的导航居中
	var rotation = document.getElementById("picrotation");
	var pointbox = document.getElementById("pointbox");
	pointbox.style.left = (rotation.offsetWidth - pointbox.offsetWidth) / 2 + "px";

	//设置轮转图片底下的导航默认点在第一个上
	var index = 0;
	var a = pointbox.getElementsByTagName("a");
	a[index].style.backgroundColor = "var(--darkcolor)";

	//点击图片导航超链接显示相应的图片
	for (var i = 0; i < a.length; i++) {
		a[i].num = i;
		a[i].onclick = function() {
			clearInterval(time);
			index = this.num;
			setPointColor();
			move(imglist, "left", -850 * index, 20, function() {
				autochange();
			});
		}
	}

	//设置自动轮转
	autochange();

	//定义一个自动切换的定时器的标识
	var time;
	//点击后修改图片导航的颜色
	function setPointColor() {
		if (index >= imgArr.length - 1) {
			index = 0;
			imglist.style.left = 0;
		}
		for (var i = 0; i < a.length; i++) {
			a[i].style.backgroundColor = "";
		}
		a[index].style.background = "var(--darkcolor)";
	}
	//设置自动轮换
	function autochange() {
		time = setInterval(
		function() {
			index = (index+1)%imgArr.length;
			move(imglist, "left", -850 * index, 20, function() {
				setPointColor();
			});
		}, 2000);
	}
	
	
}
