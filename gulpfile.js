var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin'); 

gulp.task('htmlTask',function(){ 
	
	gulp.src('src/index.html').pipe(htmlmin({
			removeComments: true, //清除HTML注释
			collapseWhitespace: true, //压缩HTML
			collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
			removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
			removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
			removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
			minifyJS: true, //压缩页面JS
			minifyCSS: true //压缩页面CSS
		})).pipe(gulp.dest('dist'));
	
})

gulp.task('jsTask',function(){
	
	gulp.src('src/js/*/*').pipe(uglify()).pipe(gulp.dest('dist/js'));
	
})

gulp.task('cssTask',function(){
	
	gulp.src('src/css/*.css').pipe(cssmin()).pipe(gulp.dest('dist/css'));
	
})

gulp.task('imageTask',function(){
	
	gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
	
	
})

gulp.task('default',['htmlTask','jsTask','cssTask','imageTask']);




