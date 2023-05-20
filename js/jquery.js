$(function () {
	// 滑动门显示；隐藏
	$(".nav-list li a").hover(function () {
		$(this).siblings("ul").stop().slideToggle(300);
	}, function () {
		$(this).siblings("ul").stop().slideToggle(300);

	});
	//手机AAP图标
	$(".bian-list li:eq(0)").hover(function () {
		$(this).parent().siblings(".side-show").stop().slideToggle();
		$(this).parent().siblings(".side-triangle").stop().slideToggle(300);
	});
	//top按钮到页面的一定地方显示
	var boxtop = $(".home-bottom").offset().top;
	$(window).scroll(function () {
		// scrshow();
		if ($(document).scrollTop() >= boxtop) {
			$("#toppd").stop().fadeIn(1000);
		} else {
			$("#toppd").stop().fadeOut(1000);
		}
	})
	//慢慢显示右侧模块
	// function scrshow(){
	// 	$(".home-banner-box").each(function(i,ele){
	// 		console.log($(this).offset().top);
	// 			if($(document).scrollTop() >= $(this).offset().top){
	// 				$(".bian-list li").eq(i).fadeIn(2000);
	// 			}
	// 	})
	// }
	// 点击top缓慢返回首页

		$("#toppd").click(function () {
			$("body, html").stop().animate({
				scrollTop: 0
			});
		})



	// 数组滑动显示按钮！
	// $(function() {
	// 			var arr = new Array(300, 500, 600, 700, 800);
	// 			//设置元素出现的TOP
	// 			$(window).scroll(function() {
	// 					for (var i = 1; i = arr.length+1; i++) {
	// 						// 创建变量list 选择的是第几个li
	// 						var listt = $(".bian-list>li").eq(i);
	// 						// 判断文档 = body是否等于数组的数据
	// 							alert(listt);
	// 						$(listt).click(function(){
	// 						})
	// 						if ($(document).scrollTop() >= arr[i]) {
	// 							// 选择当前的li
	// 							$(listt).fadeIn(1000);
	// 						} else {
	// 							$(listt).fadeOut(1000);
	// 						}
	// 					}
	// 				}

	// 			})


	//显示title

		var y = 20;
		var x = 10;
		var mytitle;
		$(".min-list li").mouseover(function (e) {
			mytitle = this.title;
			this.title = "";
			$(this).append("<div class='min-list-title'>" + mytitle + "</div>");
			$(".min-list-title").css({
				"left": (e.pageX + x) + "px",
				"top": (e.pageY + y) + "px"
			}).show("fast");
		}).mouseout(function () {
			this.title = mytitle;
			$(".min-list-title").remove();
		}).mousemove(function (e) {
			$(".min-list-title").css({
				"left": (e.pageX + x) + "px",
				"top": (e.pageY + y) + "px"
			}).show();
		});


	left_go();
	//左边的电梯导航
	function left_go() {
		var tooltop = $(".home-bottom").offset().top;
		$(window).scroll(function () {	//获取整个屏幕
			if ($(document).scrollTop() >= tooltop) {
				$(".bian-left").stop().fadeIn(100);
			} else {
				$(".bian-left").stop().fadeOut(100);
			}
		})
	}

	//左边的电梯导航滑动效果

	//点击指定的栏目就会滚动到相应的地方
	//把左边电梯的导航全部获取过来（点击索引）
	//点击到指定的栏目就滑动到相应的地方（通过索引来指定滚动的地方）

	$(".bian-left li").click(function () {
		console.log("index" + $(this).index());
		var left_nav = $(".home-banner-box").eq($(this).index()).offset().top;
		console.log(left_nav);
		$("body,html").stop().animate({
			scrollTop: left_nav
		})
		$(this).addClass("current").siblings().removeClass("current");
	})

});