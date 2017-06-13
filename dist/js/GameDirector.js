define(["Player","Enemy"],function(e,r){function t(e){this.enemyArr=[],this.level=e}return t.prototype.startGame=function(){var e=this;e.loading(function(){e.createPlayer(),e.createEnemy(),e.mapMoveing(),e.check(),$(".score").show()})},t.prototype.mapMoveing=function(){var e=0;setInterval(function(){$(".container").css("background-position-y",++e)},30)},t.prototype.createPlayer=function(){this.player=new e("player"),this.player.fire(this.level)},t.prototype.createEnemy=function(){var e=this;setInterval(function(){var t=Math.random();if(t<.7)a=new r("plane1");else if(t<.9)a=new r("plane2");else var a=new r("plane3");a.attack(),e.enemyArr.push(a)},1e3)},t.prototype.loading=function(e){$(".list").remove();var r=$('<div class="title"></div>').appendTo(".container"),t=$('<div class="loading"></div>').appendTo(".container"),a=1,n=setInterval(function(){if(4==++a)return clearInterval(n),r.remove(),t.remove(),void(e&&e());t.css("background","url(img/loading"+a+".png)")},200)},t.prototype.check=function(){var e=this;setInterval(function(){for(var r=e.enemyArr.length-1;r>=0;r--){var t=e.enemyArr[r];if(t.oDelete)e.enemyArr.splice(r,1);else{e.isCrash(t.ele,e.player.ele)&&0==e.player.isCrashFlag&&0==t.isCrashFlag&&(e.player.isCrashFlag=!0,e.player.destory(function(){alert("GameOver"),location.reload(!0)}));for(var a=e.player.bulletArr.length-1;a>=0;a--){var n=e.player.bulletArr[a];n.oDelete?e.player.bulletArr.splice(a,1):e.isCrash(n.ele,t.ele)&&0==n.isCrashFlag&&0==t.isCrashFlag&&(n.isCrashFlag=!0,n.destory(),t.hurt())}}}},30)},t.prototype.isCrash=function(e,r){var t=e.offsetLeft,a=e.offsetTop,n=e.offsetWidth,o=e.offsetHeight,i=r.offsetLeft,l=r.offsetTop,s=r.offsetWidth,f=r.offsetHeight;return i-n<t&&t<i+s&&l-o<a&&a<l+f},t});