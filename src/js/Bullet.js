


define(['Spirit'], function(Spirit) {

	function Bullet(className) {

		Spirit.call(this, className);

		//设定速度
		this.speed = -10;
		this.isCrashFlag = false;
		this.target = -300;

		this.destoryArr = ['die1.png', 'die2.png'];
	}

	Bullet.prototype = new Spirit();

	
	
	return Bullet;
})