// 定义变量
window.onload = function() {
	var items = document.getElementsByClassName('item');

	var pePreBtn = document.getElementById('gePre');

	var geNextBtn = document.getElementById('geNext');

	var index = 0; //index表示第几张图 ---》 第index 张图片有active这个类名

	var clearActive = function() {
		//把所有的li属性改成item
		for (var i = 0; i < items.length; i++) {
			items[i].className = 'item';
		}
	}

	var goIndex = function() {
		//先调用改item函数，再把index的参数对应为第几个li并附上item active
		clearActive();
		items[index].className = 'item active';

	}

	var geNext = function() { //下一张
		if (index < 4) {

			index++;
			console.log(index);
		} else {

			index = 0;

		}
		goIndex();
	}

	var pePre = function() { //上一张
		if (index == 0) {
			index = 4;
		} else {
			index--;
		}
		goIndex();
	}
	geNextBtn.addEventListener('click', function() {
		geNext();
		time = 0;
	})
	pePreBtn.addEventListener('click', function() {
		pePre();
		time = 0;
	})
	var time = 0;
	
	setInterval(function(){
		time++;
		if ( time == 20){
			geNext();
			time = 0;
		}
	},100)
}
