


define(['Spirit'], function(Spirit) {

	function Enemy(className) {

		Spirit.call(this, className);
		
		this.isCrashFlag = false;
		this.target = $(window).height();

		//设置初始位置
		$(this.ele).css({
			left: parseInt(Math.random() * ($('.container').width() - $(this.ele).width())),
			top: -$(this.ele).height()
		})

		if(className == 'plane1') {
			this.speed = 10;
			this.hp = 2;
			this.score = 2;
			this.destoryArr = ['plane1_die1.png', 'plane1_die2.png', 'plane1_die3.png'];
		} else if(className == 'plane2') {
			this.speed = 5;
			this.hp = 5;
			this.score = 5;
			this.destoryArr = ['plane2_die1.png', 'plane2_die2.png', 'plane2_die3.png', 'plane2_die4.png'];
		} else if(className == 'plane3') {
			this.speed = 2;
			this.hp = 15;
			this.score = 15;
			this.destoryArr = ['plane3_die1.png', 'plane3_die2.png', 'plane3_die3.png', 'plane3_die4.png', 'plane3_die5.png', 'plane3_die6.png'];
		}
	}

	Enemy.prototype = new Spirit();

	//掉hp
	Enemy.prototype.hurt = function() {

		var oSelf = this;
		//hp为0的时候，才能摧毁飞机
		if(--oSelf.hp == 0) {
			
			oSelf.isCrashFlag = true;
			
			oSelf.destory();
		}

	}


	return Enemy;

})