require.config({ paths: { Spirit: "Father/Spirit" } });
var moduleArr = ["jquery", "GameDirector"];
require(moduleArr, function(i, r) { i(function() { i(".list li ").on({ click: function() { new r(i(this).index() + 1).startGame() } }) }) });