define(["Spirit"],function(e){function i(i){e.call(this,i),this.isCrashFlag=!1,this.target=$(window).height(),$(this.ele).css({left:parseInt(Math.random()*($(".container").width()-$(this.ele).width())),top:-$(this.ele).height()}),"plane1"==i?(this.speed=10,this.hp=2,this.score=2,this.destoryArr=["plane1_die1.png","plane1_die2.png","plane1_die3.png"]):"plane2"==i?(this.speed=5,this.hp=5,this.score=5,this.destoryArr=["plane2_die1.png","plane2_die2.png","plane2_die3.png","plane2_die4.png"]):"plane3"==i&&(this.speed=2,this.hp=15,this.score=15,this.destoryArr=["plane3_die1.png","plane3_die2.png","plane3_die3.png","plane3_die4.png","plane3_die5.png","plane3_die6.png"])}return i.prototype=new e,i.prototype.hurt=function(){var e=this;0==--e.hp&&(e.isCrashFlag=!0,e.destory())},i});