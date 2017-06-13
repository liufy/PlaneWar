define(function() {

	//玩家飞机，敌机，子弹的父类
	function Spirit(className) {

		if(!className) {
			return;
		}

		//保存一个新节点
		this.ele = $('<div></div>').appendTo('.container').addClass(className).get(0);

	}

	//移动
	Spirit.prototype.attack = function(callback) {

		var oSelf = this;
		oSelf.attackTimer = setInterval(function() {

			$(oSelf.ele).css('top', $(oSelf.ele).position().top + oSelf.speed);
			//飞出屏幕，需要移除
			// -300为了保证不会撞上任何出现的敌机
			if(oSelf.target > 0 ? $(oSelf.ele).position().top > oSelf.target : $(oSelf.ele).position().top < oSelf.target) {

				oSelf.oDelete = true;

				//停止定时器
				clearInterval(oSelf.attackTimer);
				//移除
				$(oSelf.ele).remove();

			}

		}, 30);

	}

	//摧毁
	Spirit.prototype.destory = function(callback) {

		var oSelf = this;
		var count = 0;

		if(oSelf.ele.className == 'bullet') {
			//修改class
			$(oSelf.ele).attr('class', 'bullet_die');
		}

		oSelf.destoryTimer = setInterval(function() {

			if(count == oSelf.destoryArr.length) {

				if(oSelf.ele.className != 'player') {

					clearInterval(oSelf.attackTimer);
					//移除节点
					$(oSelf.ele).remove();

					//如何从数组中移除这个节点所对应的对象
					oSelf.oDelete = true;
				}

				//停止定时器
				clearInterval(oSelf.destoryTimer);

				if(callback) {
					callback();
				}

				return;

			}

			//修改背景图
			$(oSelf.ele).css('background', 'url(img/' + oSelf.destoryArr[count] + ')');

			count++;

		}, 80);

	}

	return Spirit;
})