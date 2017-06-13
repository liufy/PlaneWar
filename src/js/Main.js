
require.config({
	
	paths:{
		'Spirit':'Father/Spirit'
	}
	
})

var moduleArr = ['jquery','GameDirector'];

require(moduleArr,function($,GameDirector){
	
	$(function(){
		$('.list li ').on({
			click:function(){
				//创建导演对象
				var director = new GameDirector( $(this).index() + 1 );
				//开始游戏
				director.startGame();
			}
		})
	})
	
})
